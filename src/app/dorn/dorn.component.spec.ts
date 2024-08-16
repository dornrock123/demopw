import { test, expect } from '@playwright/test';

test.describe('Card Component Tests', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:4200/State'); // หรือ URL ที่คุณใช้สำหรับการทดสอบ
  });

  test('should display all cards with correct content', async ({ page }) => {
    const cards = page.locator('.card-container .card');

    // ตรวจสอบจำนวนของการ์ด
    await expect(cards).toHaveCount(11);

    // ตรวจสอบลิงก์แรก
    const firstCard = cards.nth(0);
    await expect(firstCard).toHaveAttribute('href', 'https://angular.io/tutorial');
    await expect(firstCard.locator('span')).toHaveText('Learn Angular');

    // ตรวจสอบลิงก์ที่สอง
    const secondCard = cards.nth(1);
    await expect(secondCard).toHaveAttribute('href', 'https://angular.io/cli');
    await expect(secondCard.locator('span')).toHaveText('CLI Documentation');

    // ตรวจสอบลิงก์ที่สาม
    const thirdCard = cards.nth(2);
    await expect(thirdCard).toHaveAttribute('href', 'https://material.angular.io');
    await expect(thirdCard.locator('span')).toHaveText('Angular Material');

    // ตรวจสอบลิงก์ที่สี่
    const fourthCard = cards.nth(3);
    await expect(fourthCard).toHaveAttribute('href', 'https://blog.angular.io/');
    await expect(fourthCard.locator('span')).toHaveText('Angular Blog');

    // ตรวจสอบลิงก์ที่ห้า
    const fifthCard = cards.nth(4);
    await expect(fifthCard).toHaveAttribute('href', 'https://angular.io/devtools/');
    await expect(fifthCard.locator('span')).toHaveText('Angular DevTools');
  });

  test('should display correct SVG icons in each card', async ({ page }) => {
    const icons = page.locator('.card-container .card svg');

    // ตรวจสอบจำนวน SVG ไอคอน
    await expect(icons).toHaveCount(16); // 2 ไอคอนต่อการ์ด 5 การ์ด

    // ตัวอย่างการตรวจสอบของไอคอนที่หนึ่ง
    const firstIcon = icons.nth(0);
    await expect(firstIcon).toHaveAttribute('width', '24');
    await expect(firstIcon).toHaveAttribute('height', '24');

    // ตรวจสอบไอคอนของการ์ดที่สอง (สามารถเพิ่มการตรวจสอบตามที่ต้องการ)
    const secondCardIcon = icons.nth(2);
    await expect(secondCardIcon).toHaveAttribute('width', '24');
    await expect(secondCardIcon).toHaveAttribute('height', '24');
  });

});
