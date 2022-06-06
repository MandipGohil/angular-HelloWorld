import { Component } from '@angular/core';

@Component({
  selector: 'test-folder',
  templateUrl: './test-folder.html'
})
export class TestFolderComponent {

  onClickMethod() {
    alert("You click!!");
  }

  message = "I'm read only!";
  canEdit = false;
 
  onEditClick() {
    this.canEdit = !this.canEdit;
    if (this.canEdit) {
      this.message = 'You can edit me!';
    } else {
      this.message = "I'm read only!";
    }
  }


}
