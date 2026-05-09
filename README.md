# Vercel Preview Deployment + E2E Test Demo

AI vibe coding 项目的测试流程模板

## 快速开始

```bash
npm install
npm run dev        # 本地开发
npm run test       # Playwright E2E 测试（本地）
```

## 预览部署流程

```
Push to GitHub → Vercel 自动构建 → 预览 URL 生成 → Playwright CI 测试 → Merge
```

## 获取预览 URL

1. Fork 此项目
2. 在 Vercel 导入项目
3. 创建 PR 查看 `<PR-number>.vercel.app` 预览链接

## 添加测试

在 `tests/e2e.spec.ts` 编写 Playwright 测试用例。
