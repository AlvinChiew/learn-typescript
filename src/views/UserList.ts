import { CollectionView } from "./CollectionView";
import { User, UserProps } from "../models/User";
import { UserShow } from "./UserShow";
import { UserEdit } from "./UserEdit";

export class UserList extends CollectionView<User, UserProps> {
   renderItem(itemParent: Element, model: User): void {
     new UserShow(itemParent, model).render();
   }
}
