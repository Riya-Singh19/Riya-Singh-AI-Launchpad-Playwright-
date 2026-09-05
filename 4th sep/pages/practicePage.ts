import { Page, expect } from '@playwright/test';

export class PracticePage {
  constructor(private page: Page) {}

  // Locators
  private txtName = '#name';
  private txtEmail = '#email';
  private radioFemale = 'body > main:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(4) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > input:nth-child(1)';
  private txtMobile = '#mobile';
  private txtDob = '#dob';
  private txtSubject = '#subjects';
  // private hobbyReading = '#hobbies';
  private chkSports = '#hobbies';
  private chkReading = 'body > main:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(8) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > input:nth-child(1)';
  private chkMusic = 'body > main:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(8) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > input:nth-child(1)';
  private uploadPicture = 'body > main:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > form:nth-child(1) > div:nth-child(9) > div:nth-child(2) > div:nth-child(1) > input:nth-child(1)';
  private txtAddress = '//textarea[@id="picture"]';
  private choosestate='#state';
  private choosecity='#city';
  private loginbtn = 'input[type="submit"]';

  async openApp() {
    await this.page.goto(
      'https://www.tutorialspoint.com/selenium/practice/selenium_automation_practice.php'
    );
  }

  async enterPersonalDetails(firstName: string, email: string) {
    await this.page.fill(this.txtName, firstName);
    await this.page.fill(this.txtEmail, email);
  }

  async selectGender(gender:string) {
    await this.page.check(this.radioFemale);
  }

  async enterMobileDobAndSubject(mobile:string, dob:string, subject:string) {
    await this.page.fill(this.txtMobile,mobile); 
    await this.page.fill(this.txtDob,dob);
    await this.page.fill(this.txtSubject,subject);

    // bhHTML date format
    await this.page.fill(this.txtDob, '2000-01-01');

    await this.page.fill(this.txtSubject, 'Computer Science');
  }

  // async selectHobbiesAndUploadPicture(hobby:string, picturePath:string) {
  //   await this.page.check(this.hobbyReading,hobby);
  //   await this.page.setInputFiles(this.uploadPicture, picturePath);
  // }
  async selectHobbiesAndUploadPicture(
  hobby: string,
  picturePath: string
) {

  if (hobby === 'Sports') {
    await this.page.locator(this.chkSports).check();
  }
  else if (hobby === 'Reading') {
    await this.page.locator(this.chkReading).check();
  }
  else if (hobby === 'Music') {
    await this.page.locator(this.chkMusic).check();
  }
  await this.page.setInputFiles(this.uploadPicture,picturePath);
}

  async enterAddressStateAndCity(Address:string, state:string, city:string) {
    await this.page.fill(this.txtAddress, Address);
    await this.page.selectOption(this.choosestate, state);
    await this.page.selectOption(this.choosecity, city);
  }

  async clickLoginButton(loginbtn:string) {
    await this.page.click(this.loginbtn);
  }
}