import { launch } from 'puppeteer';

async function run() {
    const browser = await launch();
    const page = await browser.newPage();

    // 캡쳐 사이즈 지정
    await page.setViewport({
        width: 640,
        height: 480,
        deviceScaleFactor: 1,
    });

    // 사이트 접속 및 이미지 저장
    await page.goto('https://example.com');
    await page.screenshot({ path: 'SizeCapture.png' });
    await browser.close();
};

run();