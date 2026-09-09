import { chromium } from 'playwright';
const b = await chromium.launchServer
  ? null : null;
const browser = await chromium.launch({ args: ['--remote-debugging-port=9222', '--no-sandbox'] });
console.log('ready');
await new Promise(() => {});
