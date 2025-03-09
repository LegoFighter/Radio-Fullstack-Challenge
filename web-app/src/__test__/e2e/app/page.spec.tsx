import { test } from "@playwright/test";

test.describe("HomePage e2e", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("User can add categories and filter by name", async ({ page }) => {
    await page.getByText("70s").click();
    await page.getByText("Alternative").click();
    await page
      .getByRole("textbox", { name: "Search by name or genre" })
      .click();
    await page
      .getByRole("textbox", { name: "Search by name or genre" })
      .fill("101");
    await page
      .getByRole("link", { name: "101 WRIF 101 WRIF Alternative" })
      .click();
    await page.getByRole("link", { name: "Home" }).click();
  });

  test("Next and previous button are not pressable when border of pages are reached.", async ({
    page,
  }) => {
    await page.getByText("2").click();
    await page.getByText("1", { exact: true }).click();
    await page.getByRole("listitem").filter({ hasText: "Previous" }).click();
    await page.getByText("2").click();
    await page.getByLabel("Go to previous page").click();
    await page.getByText("10", { exact: true }).click();
    await page.getByRole("listitem").filter({ hasText: "Next" }).click();
    await page.getByText("9", { exact: true }).click();
    await page.getByLabel("Go to next page").click();
  });
});
