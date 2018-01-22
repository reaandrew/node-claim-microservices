const { expect } = require('chai');

const sampleClaim = {
  PersonalDetails: {
    Title: 'Mr',
    Firstname: 'John',
    Lastname: 'Doe',
  },
};

describe('Submitting a new claim', () => {
  it('which is valid', () => {
    browser.url('http://localhost:8000/claims');
    expect($('.doc').getTitle()).to.be.equal('Submit a new claim');

    browser.selectByValue('[name="title"]', sampleClaim.PersonalDetails.Title);
    browser.setValue('[name="firstname"]', sampleClaim.PersonalDetails.Firstname);
    browser.setValue('[name="lastname"]', sampleClaim.PersonalDetails.Lastname);
    browser.click('#submit');

    expect($('.doc').getTitle()).to.be.equal('Thank you');
  });
});
