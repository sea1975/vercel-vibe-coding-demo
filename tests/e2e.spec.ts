import { test, expect } from "@playwright/test";

/**
 * Vercel Preview Deployment E2E 测试
 * 
 * 测试策略:
 * 1. 页面加载和渲染
 * 2. 交互功能（计数器）
 * 3. API 健康检查
 * 4. 响应式布局
 */

test.describe("首页功能测试", () => {
  test("页面正确加载", async ({ page }) => {
    await page.goto("/");

    // 检查标题
    await expect(page.locator("h1")).toContainText("Vercel");

    // 检查功能列表
    await expect(page.locator("h2").first()).toBeVisible();
  });

  test("计数器功能 - 递增", async ({ page }) => {
    await page.goto("/");

    const counterValue = page.locator("#counter-value");
    const incrementBtn = page.locator("#increment-btn");

    // 初始值为 0
    await expect(counterValue).toHaveText("0");

    // 点击 +1
    await incrementBtn.click();
    await expect(counterValue).toHaveText("1");

    // 再次点击
    await incrementBtn.click();
    await expect(counterValue).toHaveText("2");
  });

  test("计数器功能 - 递减", async ({ page }) => {
    await page.goto("/");

    const counterValue = page.locator("#counter-value");
    const decrementBtn = page.locator("#decrement-btn");

    // 先增加再减少
    await page.locator("#increment-btn").click();
    await page.locator("#increment-btn").click();
    await expect(counterValue).toHaveText("2");

    // 点击 -1
    await decrementBtn.click();
    await expect(counterValue).toHaveText("1");
  });
});

test.describe("API 测试", () => {
  test("Health Check 返回正确数据", async ({ request }) => {
    const response = await request.get("/api/health");
    
    expect(response.ok()).toBeTruthy();
    
    const data = await response.json();
    expect(data.status).toBe("ok");
    expect(data.timestamp).toBeDefined();
  });
});

test.describe("移动端适配", () => {
  test.use({ viewport: { width: 375, height: 667 } });

  test("移动端页面正常显示", async ({ page }) => {
    await page.goto("/");

    // 标题可见
    await expect(page.locator("h1")).toBeVisible();

    // 按钮可点击
    await expect(page.locator("#increment-btn")).toBeVisible();
  });
});
