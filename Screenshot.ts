// 풀페이지 스크린샷
import { launch } from 'puppeteer';

async function run() {
    const browser = await launch();
    const page = await browser.newPage();
    await page.goto('https://www.traversymedia.com');

    // 스크린샷 페이지 저장
    await page.screenshot({ path: 'Screenshot.png', fullPage: true });

    // 콘솔에 출력
    console.log(page);

    // 종료.
    await browser.close();
}

run();
