import puppeteer from 'puppeteer';
import cheerio from 'cheerio'

async function run() {
    // 브라우저를 실행한다.
    // 옵션으로 headless모드를 끌 수 있다.
    const browser = await puppeteer.launch({
        headless: false
    });

    // 새로운 페이지를 연다.
    const page = await browser.newPage();
    // 페이지의 크기를 설정한다.
    await page.setViewport({
        width: 1366,
        height: 768
    });
    // "https://www.goodchoice.kr/product/search/2" URL에 접속한다. (여기어때 호텔 페이지)
    await page.goto('https://www.goodchoice.kr/product/search/2');
    // 페이지의 HTML을 가져온다.
    const content = await page.content();
    // $에 cheerio를 로드한다.
    const $ = cheerio.load(content);
    // 복사한 리스트의 Selector로 리스트를 모두 가져온다.
    const lists = $("#poduct_list_area > li");
    // 모든 리스트를 순환한다.
    lists.each((index, list) => {
        // 각 리스트의 하위 노드중 호텔 이름에 해당하는 요소를 Selector로 가져와 텍스트값을 가져온다.
        const name = $(list).find("a > div > div.name > strong").text();
        // 인덱스와 함께 로그를 찍는다.
        console.log({
            index, name
        });
    });

    // 브라우저를 종료한다.
    browser.close();
}

run();