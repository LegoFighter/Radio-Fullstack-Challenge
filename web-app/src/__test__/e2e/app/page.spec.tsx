import { test } from "@playwright/test";

test.describe("HomePage e2e", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("User can add categories and filter by name", async ({ page }) => {
    await page.getByText('70s').click();
    await page.getByText('90s').click();
    await page.getByRole('textbox', { name: 'Search by name or genre' }).click();
    await page.getByRole('textbox', { name: 'Search by name or genre' }).fill('sho');
    await page.getByRole('link', { name: 'shonuffradio shonuffradio 80s' }).click();
    await page.getByRole('link', { name: 'Home' }).click();
  });

  test("Next and previous button are not pressable when border of pages are reached.", async ({
    page,
  }) => {
    await page.getByText('2', { exact: true }).click();
    await page.getByLabel('pagination').getByText('1').click();
    await page.getByText('5', { exact: true }).click();
    await page.getByRole('listitem').filter({ hasText: 'Next' }).click();
    await page.getByRole('link', { name: 'Radio Banovina Radio Banovina' }).click();
    await page.getByRole('link', { name: 'Home' }).click();
  });
});
