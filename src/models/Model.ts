import { AxiosPromise, AxiosResponse } from "axios";
import { Callback } from "./Eventing";

interface ModelAttribute<T> {
  get<K extends keyof T>(key: K): T[K]
  set(update: T): void;
  getAll(): T;
}

interface Sync<T> {
  fetch(id: number): AxiosPromise;
  save( data: T): AxiosPromise;
}

interface Event {
  on(event: string, callback: Callback): void;
  trigger(event: string): void;
}

interface HasId {
  id?: number;
}

export class Model<T extends HasId> {
  constructor(
    private attributes: ModelAttribute<T>,
    private sync: Sync<T>,
    private events: Event
  ){}

  on = this.events.on
  trigger = this.events.trigger
  get = this.attributes.get

  set(update: T) {
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