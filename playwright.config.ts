import { defineConfig, devices } from "@playwright/test";

/**
 * Vercel Preview Deployment E2E 测试配置
 * 
 * 使用方式:
 * 1. 本地测试: npx playwright test
 * 2. CI 测试: npx playwright test --project=chromium
 * 3. UI 模式: npx playwright test --ui
 */
export default defineConfig({
  testDir: "./tests",
  
  // 完整的测试超时
  timeout: 30 * 1000,
  
  // 期望的测试报告
  reporter: [
    ["html", { outputFolder: "playwright-reports" }],
    ["list"],
  ],

  // 全局钩子
  use: {
    // 基础 URL - CI 中会被覆写
    baseURL: process.env.PLAYWRIGHT_BASE_URL || "http://localhost:3000",

    // 截图和跟踪
    screenshot: "only-on-failure",
    trace: "on-first-retry",
    
    // 忽略 HTTPS 错误（预览环境用自签名证书时需要）
    ignoreHTTPSErrors: true,
  },

  // 项目配置
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
    {
      name: "mobile-chrome",
      use: { ...devices["Pixel 5"] },
    },
  ],

  // WebServer 配置（本地测试时自动启动）
  webServer: process.env.CI
    ? undefined // CI 环境使用已有 URL
    : {
        command: "npm run dev",
        url: "http://localhost:3000",
        reuseExistingServer: !process.env.CI,
        timeout: 120 * 1000,
      },
});
