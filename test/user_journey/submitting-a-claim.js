const { expect } = require('chai');

const sampleClaim = {
  PersonalDetails: {
    Title: 'Mr',
    Firstname: 'John',
    Lastname: 'Doe',
    Nino: 'XX000000X',
    Dob: '1973-01-01',
  },
  AddressDetails: {
    FirstLine: '1 some house',
    SecondLine: 'some village',
    TownCity: 'some town',
    County: 'some county',
    PostCode: 'XX11XX',
  },
  BankDetails: {
    Name: 'barclays',
    AccountNumber: '012345678',
    SortCode: '112233',
  },
};

describe('Submitting a new claim', () => {
  it('which is valid', () => {
    browser.url('http://localhost:8000/claims');
    expect($('.doc').getTitle()).to.be.equal('Submit a new claim');

    browser.selectByValue('[name="title"]', sampleClaim.PersonalDetails.Title);
    browser.setValue('[name="firstname"]', sampleClaim.PersonalDetails.Firstname);
    browser.setValue('[name="lastname"]', sampleClaim.PersonalDetails.Lastname);
    browser.setValue('[name="nino"]', sampleClaim.PersonalDetails.Nino);
    browser.setValue('[name="dob"]', sampleClaim.PersonalDetails.Dob);

    browser.setValue('[name="address_line_1"]', sampleClaim.AddressDetails.FirstLine);
    browser.setValue('[name="address_line_2"]', sampleClaim.AddressDetails.SecondLine);
    browser.setValue('[name="town_city"]', sampleClaim.AddressDetails.TownCity);
    browser.setValue('[name="county"]', sampleClaim.AddressDetails.County);
    browser.setValue('[name="postcode"]', sampleClaim.AddressDetails.PostCode);

    browser.setValue('[name="bank_name"]', sampleClaim.BankDetails.Name);
    browser.setValue('[name="bank_account_number"]', sampleClaim.BankDetails.AccountNumber);
    browser.setValue('[name="bank_sort_code"]', sampleClaim.BankDetails.SortCode);

    browser.click('[name="email"]');

    //browser.saveScreenshot('./new_claim_form.png');
    browser.click('#submit');

    expect($('.doc').getTitle()).to.be.equal('Thank you');
  });
});
