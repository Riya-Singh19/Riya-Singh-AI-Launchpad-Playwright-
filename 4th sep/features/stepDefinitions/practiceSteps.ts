import { Given, When, Then } from '@cucumber/cucumber';
import { PracticePage } from '../../pages/practicePage';
import { CustomWorld } from '../../support/world';

let practice: PracticePage;

Given('user is on the register page', async function (this: CustomWorld) {
  practice = new PracticePage(this.page);
  await practice.openApp();
});

When(
  'user enters the first name {string} ,email {string}',
  async function (name: string, email: string) {
    await practice.enterPersonalDetails(name, email);
  }
);

When(
  'user enters gender {string}',
  async function (gender: string) {
    await practice.selectGender(gender);
  }
);

When(
  'user enters mobile {string},date of birth {string},subject {string}',
  async function (
    mobile: string,
    dob: string,
    subject: string
  ) {
    await practice.enterMobileDobAndSubject(
      mobile,
      dob,
      subject
    );
  }
);

When(
  'user selects hobbies {string} and uploads picture {string}',
  async function (
    hobby: string,
    picture: string
  ) {
    await practice.selectHobbiesAndUploadPicture(
      hobby,
      picture
    );
  }
);

When(
  'user enters current address {string}, selects state {string} and city {string}',
  async function (
    address: string,
    state: string,
    city: string
  ) {
    await practice.enterAddressStateAndCity(
      address,
      state,
      city
    );
  }
);

When('user clicks the login button', async function () {
  await practice.clickLoginButton('input[type="submit"]');
});

Then('user should login successfully', async function () {
  console.log('User logged in successfully');
});