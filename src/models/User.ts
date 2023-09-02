import { AxiosResponse } from "axios";
import { Eventing } from "./Eventing";
import { Sync } from "./Sync";
import { Attribute } from "./Attribute";


export interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

const rootUrl: string = "http://localhost:3000/users";

export class User {
  public events: Eventing = new Eventing();
  public sync: Sync<UserProps> = new Sync(rootUrl);
  public attributes: Attribute<UserProps>;

  constructor(attrs: UserProps) {
    this.attributes = new Attribute(attrs);
  }

  get on() { return this.events.on}
  get trigger() { return this.events.trigger}
  get get() { return this.attributes.get}

  set(update: UserProps) {
    this.attributes.set(update);
    this.trigger('change');
  }

  fetch(): void {
    const id = this.get('id');
    
    if (typeof id != 'number') {
      throw new Error('ERROR - Invalid User ID');
    }   
    this.sync.fetch(id).then((response: AxiosResponse): void => {
      this.set(response.data);
    })
  }

  save(): void {
    this.sync
      .save(this.attributes.getAll())
      .then(
        (response: AxiosResponse): void => {
          this.trigger('save');
      })
      .catch(() => {
        this.trigger('error');
      });
  }
}
