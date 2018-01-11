const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://localhost:8000/');
  const title = await page.title();
  title.should.eql('bang');
  await browser.close();
})();
