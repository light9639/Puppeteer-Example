import fs from 'fs';
import { launch } from 'puppeteer';

async function run() {
    const browser = await launch();
    const page = await browser.newPage();
    await page.goto('https://www.traversymedia.com');

    // pdf로 저장
    await page.pdf({ path: 'example.pdf', format: 'A4' });

    // 콘솔에 출력
    console.log(page);

    // 종료.
    await browser.close();
}

run();
