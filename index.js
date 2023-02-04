import { writeFile } from 'fs';
import { launch } from 'puppeteer';

async function run() {
  const browser = await launch();
  const page = await browser.newPage();
  await page.goto('https://www.traversymedia.com');

  // evaluate를 사용하여 innerText 가져오기
  const courses1 = await page.evaluate(() =>
    Array.from(document.querySelectorAll('#courses .card'), (e) => ({
      title: e.querySelector('.card-body h3').innerText,
      level: e.querySelector('.card-body .level').innerText,
      url: e.querySelector('.card-footer a').href,
      promo: e.querySelector('.card-footer .promo-code .promo').innerText,
    }))
  );

  // $$eval을 사용하여 innerText 가져오기
  const courses2 = await page.$$eval('#courses .card', (elements) =>
    elements.map((e) => ({
      title: e.querySelector('.card-body h3').innerText,
      level: e.querySelector('.card-body .level').innerText,
      url: e.querySelector('.card-footer a').href,
      promo: e.querySelector('.card-footer .promo-code .promo').innerText,
    }))
  );

  // 콘솔에 출력
  console.log(courses1);
  console.log(courses2);

  // courses1.json으로 자료 저장
  writeFile('courses1.json', JSON.stringify(courses1), (err) => {
    if (err) throw err;
    console.log('File saved');
  });

  // courses2.json으로 자료 저장
  writeFile('courses2.json', JSON.stringify(courses2), (err) => {
    if (err) throw err;
    console.log('File saved');
  });

  // 종료.
  await browser.close();
}

run();
