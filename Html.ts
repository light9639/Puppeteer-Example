import { writeFile } from 'fs';
import { launch } from 'puppeteer';

async function run() {
    const browser = await launch();
    const page = await browser.newPage();
    await page.goto('https://www.traversymedia.com');

    // Html 페이지 가져오기
    const html = await page.content();

    // 콘솔에 출력
    console.log(html);

    // Json 파일로 변경하기
    writeFile('html.json', JSON.stringify(html), (err) => {
        if (err) throw err;
        console.log('File saved');
    });

    // 종료.
    await browser.close();
}

run();
