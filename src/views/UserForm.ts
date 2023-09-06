import { User, UserProps } from '../models/User';
import { View } from './View';


export class UserForm extends View<User, UserProps> {
  eventsMap(): {[key: string]: () => void} {
    return {
      'click:.set-age': this.onSetAgeClick,
      'click:.set-name': this.onSetNameClick,
      'click:.save-model': this.onSaveModelClick
      // 'click:button': this.onButtonClick
    }
  }

  onSaveModelClick = (): void => {
    this.model.save();
  }

  onSetAgeClick = (): void => {
    this.model.setRandomAge()
    // console.log(`new age is : ${this.model.get('age')}`);
  }

  onSetNameClick = (): void => {
    const input = this.parent.querySelector('input');
    if (input) {
      const name = input.value;
      this.model.set({'name': name});
    }
  }

  // onButtonClick(): void {
  //   console.log("button clicked");
  // }



  template(): string {
    return `
      <div>
        <h1>User Form</h1>
        <div>User name: ${this.model.get('name')}</div>
        <div>User age: ${this.model.get('age')}</div>
        <input placeholder="${this.model.get('name')}"/>
        <button class="set-name">Update Name</button>
        <button class="set-age">Set Random Age</button>
        <br/>
        <button class="save-model">Save</button>
      </div>
    `
  }

}