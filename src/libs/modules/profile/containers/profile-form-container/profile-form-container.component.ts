import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ProfileDbService } from '../../services/profile-db.service';
import { Store, select } from '@ngrx/store';
import { State } from '../../+state/profile.reducer';
import { getProfileFromDB } from '../../+state/profile.actions';
import { selectProfileInfo } from '../../+state/profile.selectors';
import { delay, filter } from 'rxjs/operators';

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

  constructor(
    private formBuilder: FormBuilder,
    public profileDB: ProfileDbService,
    private store: Store<State>
  ) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.store.dispatch(getProfileFromDB());

    this.subscriptions.add(
      this.store.pipe(
        select(selectProfileInfo),
        filter(profileInfo => !!profileInfo)
      ).subscribe((profileInfo) => {
        this.myForm.patchValue(profileInfo, { emitEvent: false });
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

