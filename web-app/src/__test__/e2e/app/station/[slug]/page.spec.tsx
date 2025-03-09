import { test } from "@playwright/test";

test.describe("StationDetails e2e", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("User can navigate to details and back to home", async ({ page }) => {
    await page
      .getByRole("link", { name: "WFAN 66 AM - 101.9 FM WFAN 66" })
      .click();
    await page.getByRole("link", { name: "Home" }).click();
  });
});
