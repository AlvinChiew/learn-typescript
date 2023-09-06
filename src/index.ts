import { UserForm } from "./views/UserForm";
import { User } from "./models/User";

const user = User.buildUser({name: "Jack", age: 20});
const root = document.getElementById("root")
if (root) {
  const userForm = new UserForm(root, user);
  userForm.render();
} else {
  throw new Error("ERROR - root element not found");
}
