import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Vercel 预览部署配置
  eslint: {
    // 忽略构建时的 lint 错误（可在 CI 中单独运行 lint）
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
