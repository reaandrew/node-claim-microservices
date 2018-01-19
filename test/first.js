const { expect } = require('chai');

describe('webdriver.io api page', () => {
  it('should be able to filter for commands', () => {
    browser.url('http://localhost:8000/claims');

    expect($('.doc').getTitle()).to.be.equal('Submit new claim');
  });
});
