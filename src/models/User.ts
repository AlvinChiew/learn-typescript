import { Model } from "./Model";
import { ApiSync } from "./ApiSync";
import { Eventing } from "./Eventing";
import { Attribute } from "./Attribute";
import { Collection } from "./Collection";


export interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

const rootUrl: string = "http://localhost:3000/users";

export class User extends Model<UserProps> {
  static buildUser(attrs: UserProps): User {
    return new User(
      new Attribute<UserProps>(attrs),
      new ApiSync<UserProps>(rootUrl),
      new Eventing()
    );
  }

  static buildUserCollection() {
    return new Collection<User, UserProps>(
      rootUrl, 
      (json: UserProps) => { return User.buildUser(json)}
      );
  }
}
