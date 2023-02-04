import { launch } from 'puppeteer';

async function run() {
    const browser = await launch();
    const page = await browser.newPage();
    await page.goto('https://example.com');

    // 페이지의 넓이 및 높이 출력
    const dimensions = await page.evaluate(() => {
        return {
            width: document.documentElement.clientWidth,
            height: document.documentElement.clientHeight,
            deviceScaleFactor: window.devicePixelRatio,
        };
    });

    // 콘솔 출력
    console.log('Dimensions:', dimensions);

    await browser.close();
}

run();