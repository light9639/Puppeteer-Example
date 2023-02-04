import { writeFile } from 'fs';
import { launch } from 'puppeteer';

async function run() {
    const browser = await launch();
    const page = await browser.newPage();
    await page.goto('https://www.traversymedia.com');

    // a 링크의 href 가져오기
    const links = await page.evaluate(() =>
        Array.from(document.querySelectorAll('a'), (e) => e.href)
    );

    // 콘솔에 출력
    console.log(links);

    // links.json으로 자료 저장
    writeFile('links.json', JSON.stringify(links), (err) => {
        if (err) throw err;
        console.log('File saved');
    });

    // 종료.
    await browser.close();
}

run();
