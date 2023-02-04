import { writeFile } from 'fs';
import { launch } from 'puppeteer';

async function run() {
    const browser = await launch();
    const page = await browser.newPage();
    await page.goto('https://www.traversymedia.com');

    // 텍스트 가져오기
    const text = await page.evaluate(() => document.body.innerText);

    // 콘솔에 출력
    console.log(text);

    // text.json으로 자료 저장
    writeFile('text.json', JSON.stringify(text), (err) => {
        if (err) throw err;
        console.log('File saved');
    });

    // 종료.
    await browser.close();
}

run();
