import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ProfileDbService } from '../../services/profile-db.service';

@Component({
  selector: 'app-profile-form-container',
  templateUrl: './profile-form-container.component.html',
  styleUrls: ['./profile-form-container.component.scss']
})
export class ProfileFormContainerComponent implements OnInit {

  myForm = this.formBuilder.group({
    name: this.formBuilder.control(null, [Validators.required]),
    title: this.formBuilder.control(null)
  })

  subscriptions: Subscription = new Subscription();

  constructor(private formBuilder: FormBuilder, public profileDB: ProfileDbService) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.subscriptions.add(
      this.profileDB.getProfile().subscribe((profileDocValue) => {
        this.myForm.patchValue(profileDocValue, { emitEvent: false });
      })
    )
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

  handleSaveClicked() {
    this.profileDB.saveProfile(this.myForm.value);
  }

}

