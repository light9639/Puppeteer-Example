# ๐ญ Puppeteer๋ฅผ Ts-Node๋ฅผ ์ด์ฉํ์ฌ ๋ง๋  ์์  ํ์ผ๋ค์๋๋ค.

![๋ค์ด๋ก๋](https://user-images.githubusercontent.com/95972251/216873618-964275a6-b488-45f4-8fd4-e51fbb102e96.png)

:sparkles: Puppeteer๋ฅผ Ts-Node๋ฅผ ์ด์ฉํ์ฌ ๋ง๋  ์์  ํ์ผ๋ค์๋๋ค. :sparkles:
## ๐ package.json ์ค์  ๋ฐ Puppeteer, ts-node ์ค์นํ๊ธฐ
์ฐ์  `package.json`์ ์์ฑํ๋ค.
```bash
$ npm init -y
# or
$ yarn init -y
```
`package.json`์ด ๋ง๋ค์ด์ก๋ค๋ฉด, `Puppeteer`์ `ts-node` ํจํค์ง๋ฅผ ์ค์นํ๋ค.
```bash
$ npm install @types/node @types/puppeteer puppeteer ts-node typescript
# or
$ yarn add @types/node @types/puppeteer puppeteer ts-node typescript
```
## โ๏ธ ์ฌ์ฉ๋ฒ
์ค์ ์ด ์๋ฃ๋์๋ค๋ฉด ๊ฐ `ts-node {ํ์ผ๋ช}.ts`๋ผ๋ ๋ช๋ น์ด๋ฅผ ์คํ์ํค๋ฉด ๊ฐ ํ์ผ์ ์ค์ ๋์ด ์๋ ํ์ผ๋ค์ด ์คํ๋๋ค.
