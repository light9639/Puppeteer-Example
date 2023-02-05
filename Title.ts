import { writeFile } from 'fs';
import { launch } from 'puppeteer';

async function run() {
    const browser = await launch();
    const page = await browser.newPage();
    await page.goto('https://www.traversymedia.com');

    // 타이틀 컨텐츠 가져오기
    const title = await page.evaluate(() => document.title);

    // 콘솔에 출력
    console.log(title);

    // title.json으로 자료 저장
    writeFile('title.json', JSON.stringify(title), (err) => {
        if (err) throw err;
        console.log('File saved');
    });

    // 종료.
    await browser.close();
}

run();
