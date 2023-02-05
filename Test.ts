// 로그인 페이지 접속 및 로그인 스크린샷 예제.
import { launch } from 'puppeteer';
let count = 0;

(async () => {
    const browser = await launch({
        headless: true,
        args: [`--window-size=1920,1080`],
        defaultViewport: {
            width: 1920,
            height: 1080
        }
    });
    const page = await browser.newPage();
    const loginId = 'admin';
    const loginPass = '1234';

    await page.goto('http://localhost:10000');
    await page.screenshot({ path: path('main') });

    // 페이지로 이동
    await page.goto('http://localhost:10000/auth/login');
    await page.screenshot({ path: path('login-screen') });

    // 로그인
    await page.evaluate((id, pw) => {
        const text = document.querySelector('input[type="text"]') as HTMLInputElement;
        text.value = id;
        const password = document.querySelector('input[type="text"]') as HTMLInputElement;
        password.value = pw;
    }, loginId, loginPass);

    // 로그인 버튼 클릭
    await page.click('button[type="submit"]');
    await page.waitForSelector('.main_visual_wrap');
    await page.screenshot({ path: path('after-login') });

    // 테스트 종료
    await browser.close();
})();

function path(fileName: string) {
    let numStr = (++count).toString().padStart(3, "0");
    return './test-result/' + numStr + "-" + fileName + '.png';
}