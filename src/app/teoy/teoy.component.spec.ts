import { test, expect } from '@playwright/test';

test.describe('Circle Link Component Tests', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:4200/State'); // หรือ URL ที่คุณใช้สำหรับการทดสอบ
  });

  test('should display all circle links with correct attributes and content', async ({ page }) => {
    const circleLinks = page.locator('.card-container .circle-link');

    // ตรวจสอบจำนวนของลิงก์
    await expect(circleLinks).toHaveCount(2);

    // ตรวจสอบลิงก์แรก
    const firstLink = circleLinks.nth(0);
    await expect(firstLink).toHaveAttribute('href', 'https://www.meetu.com/find/?keywords=angular');
    await expect(firstLink).toHaveAttribute('title', 'Find a Local Meetup');
    await expect(firstLink.locator('title')).toHaveText('Meetup Logo');

    // ตรวจสอบลิงก์ที่สอง
    const secondLink = circleLinks.nth(1);
    await expect(secondLink).toHaveAttribute('href', 'https://discord.gg/angular');
    await expect(secondLink).toHaveAttribute('title', 'Join the Conversation on Discord');
    await expect(secondLink.locator('title')).toHaveText('Discord Logo');
  });

  test('should display correct SVG icons in each circle link', async ({ page }) => {
    const svgs = page.locator('.card-container .circle-link svg');

    // ตรวจสอบจำนวน SVG ไอคอน
    await expect(svgs).toHaveCount(2);

    // ตรวจสอบไอคอน SVG แรก
    const firstSvg = svgs.nth(0);
    await expect(firstSvg).toHaveAttribute('width', '24.607');
    await expect(firstSvg).toHaveAttribute('height', '23.447');

    // ตรวจสอบไอคอน SVG ที่สอง
    const secondSvg = svgs.nth(1);
    await expect(secondSvg).toHaveAttribute('width', '26');
    await expect(secondSvg).toHaveAttribute('height', '26');
  });

});
