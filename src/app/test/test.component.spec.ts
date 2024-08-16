import { test, expect } from '@playwright/test';

// test('basic test', async ({ page }) => {
//   await page.goto('/');
//   await expect(page).toHaveTitle(/Welcome/);
// });


test('toolbar content and links', async ({ page }) => {
  // ไปที่ URL ของหน้าเว็บที่มี toolbar
  await page.goto('/'); // เปลี่ยนเป็น URL ของคุณ

  // ตรวจสอบการมีอยู่ของโลโก้ Angular
  const angularLogo = page.locator('img[alt="Angular Logo"]');
  await expect(angularLogo).toBeVisible();

  // ตรวจสอบข้อความ "Welcome"
  const welcomeText = page.locator('span:has-text("Welcome")');
  await expect(welcomeText).toBeVisible();

  // ตรวจสอบลิงก์ Twitter
  const twitterLink = page.locator('a[aria-label="Angular on twitter"]');
  await expect(twitterLink).toHaveAttribute('href', 'https://twitter.com/angular');

  // ตรวจสอบลิงก์ YouTube
  const youtubeLink = page.locator('a[aria-label="Angular on YouTube"]');
  await expect(youtubeLink).toHaveAttribute('href', 'https://youtube.com/angular');
});

// tests/resources.spec.js
test('resources cards', async ({ page }) => {
  // ไปที่ URL ของหน้าเว็บที่มี resources
  await page.goto('/'); // เปลี่ยนเป็น URL ของคุณ

  const resourceHeader = page.locator('h2').nth(0); // ใช้ `.nth(0)` เพื่อเลือก `<h2>` แรกที่พบ
  await expect(resourceHeader).toHaveText('Resources');

  // ตรวจสอบว่ามี `<p>` ที่มีข้อความ "Here are some links to help you get started:"
  const paragraph = page.locator('p:has-text("Here are some links to help you get started:")');
  await expect(paragraph).toBeVisible();

  // ตรวจสอบจำนวนการ์ดและพิมพ์จำนวนการ์ดออกมา
  const cardLinks = page.locator('.card-container .card');
  const cardCount = await cardLinks.count();
  console.log(`Found ${cardCount} cards`);

  // ตรวจสอบว่ามีการ์ดทั้งหมด 5 อัน
  await expect(cardCount).toBe(11);

  // ตรวจสอบลิงก์ "Learn Angular"
  const learnAngularCard = cardLinks.nth(0);
  await expect(learnAngularCard).toHaveAttribute('href', 'https://angular.io/tutorial');
  await expect(learnAngularCard.locator('span')).toHaveText('Learn Angular');

  // ตรวจสอบลิงก์ "CLI Documentation"
  const cliDocCard = cardLinks.nth(1);
  await expect(cliDocCard).toHaveAttribute('href', 'https://angular.io/cli');
  await expect(cliDocCard.locator('span')).toHaveText('CLI Documentation');

  // ตรวจสอบลิงก์ "Angular Material"
  const angularMaterialCard = cardLinks.nth(2);
  await expect(angularMaterialCard).toHaveAttribute('href', 'https://material.angular.io');
  await expect(angularMaterialCard.locator('span')).toHaveText('Angular Material');

  // ตรวจสอบลิงก์ "Angular Blog"
  const angularBlogCard = cardLinks.nth(3);
  await expect(angularBlogCard).toHaveAttribute('href', 'https://blog.angular.io/');
  await expect(angularBlogCard.locator('span')).toHaveText('Angular Blog');

  // ตรวจสอบลิงก์ "Angular DevTools"
  const angularDevToolsCard = cardLinks.nth(4);
  await expect(angularDevToolsCard).toHaveAttribute('href', 'https://angular.io/devtools/');
  await expect(angularDevToolsCard.locator('span')).toHaveText('Angular DevTools');
});
