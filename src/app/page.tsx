import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>🚀 Vercel + Vibe Coding Demo</h1>
      <p style={{ color: "#666", marginBottom: "2rem" }}>
        AI 生成的代码，通过 Vercel 预览部署 + Playwright E2E 测试验证
      </p>

      <section style={{ marginBottom: "2rem" }}>
        <h2>📋 功能列表</h2>
        <ul>
          <li>计数器组件（带状态）</li>
          <li>主题切换</li>
          <li>API 路由示例</li>
        </ul>
      </section>

      <section style={{ marginBottom: "2rem" }}>
        <h2>🧪 测试状态</h2>
        <div id="test-counter-display" style={{ fontSize: "2rem", fontWeight: "bold" }}>
          点击次数: <span id="counter-value">0</span>
        </div>
        <div style={{ marginTop: "1rem" }}>
          <button
            id="increment-btn"
            style={{
              padding: "0.5rem 1rem",
              fontSize: "1rem",
              cursor: "pointer",
              marginRight: "0.5rem",
            }}
          >
            +1
          </button>
          <button
            id="decrement-btn"
            style={{
              padding: "0.5rem 1rem",
              fontSize: "1rem",
              cursor: "pointer",
            }}
          >
            -1
          </button>
        </div>
      </section>

      <section>
        <h2>🔗 链接</h2>
        <Link href="/api/health" style={{ color: "#0066cc" }}>
          Health Check API →
        </Link>
      </section>

      <footer style={{ marginTop: "3rem", color: "#999", fontSize: "0.875rem" }}>
        预览部署 URL: {process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "本地环境"}
      </footer>

      <script>
        {`
          let count = 0;
          const counterValue = document.getElementById('counter-value');
          const incrementBtn = document.getElementById('increment-btn');
          const decrementBtn = document.getElementById('decrement-btn');

          incrementBtn.addEventListener('click', () => {
            count++;
            counterValue.textContent = count;
          });

          decrementBtn.addEventListener('click', () => {
            count--;
            counterValue.textContent = count;
          });
        `}
      </script>
    </main>
  );
}
