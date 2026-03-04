import Image from "next/image";

const LINE_URL = "https://lin.ee/m8ae4Ub";

const CASES = [
  {
    tag: "運輸・物流",
    title: "紙の日報 → デジタル化で集計時間90%削減",
    desc: "毎日1時間かかっていたExcel転記作業を、タブレット入力 + 自動集計ダッシュボードで30分に短縮。月20時間・月4万円のコスト削減を実現。",
    image: "/images/case-dashboard.png",
    metrics: [
      { value: "-90%", label: "集計時間" },
      { value: "月20h", label: "削減時間" },
      { value: "2週間", label: "構築期間" },
    ],
    tools: ["Notion", "Google Forms", "Make"],
  },
  {
    tag: "6事業横断",
    title: "SNS運用の完全自動化 — 投稿管理80%削減",
    desc: "6事業分のSNS投稿を手動管理していた状態から、コンテンツDB + AI下書き + 自動投稿の仕組みを構築。月15時間→3時間に。",
    image: "/images/case-automation.png",
    metrics: [
      { value: "-80%", label: "管理時間" },
      { value: "月12h", label: "削減時間" },
      { value: "1週間", label: "構築期間" },
    ],
    tools: ["Notion", "Claude API", "Make", "Buffer"],
  },
  {
    tag: "コンサルティング",
    title: "問い合わせ対応AIチャットボット",
    desc: "同じ質問（料金・サービス内容・予約方法）への重複対応をAIが自動化。初期対応時間がほぼゼロに。本質的な相談だけが人間に届く仕組み。",
    image: "/images/case-chatbot.png",
    metrics: [
      { value: "→即時", label: "対応速度" },
      { value: "月5h→0", label: "対応時間" },
      { value: "1.5週", label: "構築期間" },
    ],
    tools: ["Dify", "Slack", "Notion"],
  },
  {
    tag: "バックオフィス",
    title: "請求書・見積書の自動生成",
    desc: "フォーム入力だけで請求書PDFを自動生成し、メールで自動送付。転記ミスゼロ・毎月の作成時間を95%削減。",
    image: "/images/case-invoice.png",
    metrics: [
      { value: "-95%", label: "作成時間" },
      { value: "ミス0", label: "転記エラー" },
      { value: "5日", label: "構築期間" },
    ],
    tools: ["Google Forms", "Make", "PDF API", "Gmail"],
  },
  {
    tag: "経営管理",
    title: "AIオーケストレーションで6事業を自動管理",
    desc: "統括AIエージェント（CEO）が4つの専門AIエージェントを指揮し、KPI追跡・週次レポート・タスク振り分けを全自動化。管理工数を月30時間→5時間に。",
    image: "/images/case-orchestration.png",
    metrics: [
      { value: "-83%", label: "管理工数" },
      { value: "月25h", label: "削減時間" },
      { value: "2週間", label: "構築期間" },
    ],
    tools: ["Claude", "Notion", "Make", "自社プロンプト"],
  },
];

const PLANS = [
  {
    name: "ライト",
    price: "15〜20",
    unit: "万円",
    desc: "「まずAIを試したい」",
    features: ["AI活用コンサルティング", "プロンプト設計", "業務フロー診断", "改善提案レポート"],
    featured: false,
  },
  {
    name: "スタンダード",
    price: "30〜50",
    unit: "万円",
    desc: "「この業務を自動化したい」",
    features: ["業務自動化フロー構築", "Make/Zapier連携", "操作マニュアル作成", "Zoom説明会", "テスト・調整込み"],
    featured: true,
  },
  {
    name: "プレミアム",
    price: "50〜80",
    unit: "万円",
    desc: "「根本から仕組みを変えたい」",
    features: ["AI + 自動化の複合システム", "AIエージェント構築", "全フロー最適化", "スタッフ研修", "保守サポート1ヶ月付き"],
    featured: false,
  },
];

const FAQS = [
  {
    q: "うちの社員はITに詳しくないけど使えますか？",
    a: "使えます。あなたの社員が使えるかどうかを最優先に設計します。私自身、現場のドライバーにタブレット操作を教えてきた経験があります。操作が簡単なツールを選び、定着するまでサポートします。",
  },
  {
    q: "どのツールを使いますか？",
    a: "課題に合わせて最適なものを選びます。特定のツールを売り込むことはしません。Make、Zapier、Claude、GPT、Notion、Airtable等から、御社に最適な組み合わせを選定します。",
  },
  {
    q: "補助金は使えますか？",
    a: "IT導入補助金・ものづくり補助金の対象になる可能性があります。補助金申請のサポートも行っていますので、個別にご相談ください。",
  },
  {
    q: "他のコンサルと何が違いますか？",
    a: "「運輸現場を10年経験した人間がAIを入れる」のが最大の違いです。技術だけの人は「動くシステム」を作れますが、「現場で使われるシステム」は作れません。導入後の定着率にコミットします。",
  },
];

export default function Home() {
  return (
    <>
      {/* ===== Nav ===== */}
      <nav className="nav">
        <div className="container nav-inner">
          <a href="#" className="nav-logo">
            ⚡ アキラ<span>DX</span>
          </a>
          <ul className="nav-links">
            <li><a href="#problems">よくある悩み</a></li>
            <li><a href="#cases">実績</a></li>
            <li><a href="#plans">料金</a></li>
            <li><a href="#faq">FAQ</a></li>
          </ul>
          <a href={LINE_URL} className="btn-primary" style={{ padding: "10px 24px", fontSize: "0.85rem" }}>
            無料で相談する
          </a>
        </div>
      </nav>

      {/* ===== Hero ===== */}
      <section className="hero">
        <div className="container">
          <span className="hero-badge">🚀 運輸現場出身 × AI自動化のプロ</span>
          <h1>
            現場を知るプロが、
            <br />
            <span className="accent-text">あなたの業務をAIで自動化する</span>
          </h1>
          <p className="hero-subtitle">
            使われないシステムは作りません。
            <br />
            導入後の定着率にコミットする、現場発のDX支援サービスです。
          </p>
          <div className="hero-buttons">
            <a href={LINE_URL} className="btn-primary">
              🟢 無料で相談する（LINE）
            </a>
            <a href="#cases" className="btn-secondary">
              実績を見る →
            </a>
          </div>

          <div className="stats">
            <div className="stat-item">
              <div className="stat-value">-90%</div>
              <div className="stat-label">業務時間削減</div>
            </div>
            <div className="stat-item">
              <div className="stat-value">5件+</div>
              <div className="stat-label">構築実績</div>
            </div>
            <div className="stat-item">
              <div className="stat-value">1,800万</div>
              <div className="stat-label">年収（6事業運営）</div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Profile ===== */}
      <section>
        <div className="container">
          <div className="profile-section">
            <div className="profile-info">
              <div className="profile-name">高橋 晟（アキラ）</div>
              <div className="profile-title">運輸企業取締役 × AI・自動化コンサルタント</div>
              <p className="profile-bio">
                高卒から大手引越会社に入社。月残業125時間の運輸現場で叩き上げ、
                取締役に昇格。現在はDX/AI×自動化で6事業を同時運営し、
                年収1,800万円を達成。AIと自動化のスキルは、自分のビジネスを回すために身につけました。
                だから「技術の理論」ではなく「実際にどう儲かるか」でお話できます。
              </p>
              <div className="profile-timeline">
                <span className="timeline-tag">高卒</span>
                <span className="timeline-tag">→ 大手引越会社</span>
                <span className="timeline-tag">→ 月残業125h</span>
                <span className="timeline-tag">→ 取締役昇格</span>
                <span className="timeline-tag">→ 6事業運営</span>
                <span className="timeline-tag">→ 年収1,800万</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Problems ===== */}
      <section id="problems">
        <div className="container" style={{ textAlign: "center" }}>
          <span className="section-label">こんなお悩みありませんか？</span>
          <h2 className="section-title">多くの中小企業が抱える課題</h2>
          <p className="section-desc">
            これらは私自身が現場で経験してきた課題です。だから解決策が分かります。
          </p>
          <div className="problems-grid">
            {[
              { icon: "📋", title: "紙の日報・手作業が多すぎる", desc: "毎日のExcel転記、紙の集計作業に何時間もかかっている。ミスも多い。" },
              { icon: "🤷", title: "AIに興味はあるが何から始めればいいか分からない", desc: "「AIで効率化したい」と思っているが、具体的に何をどうすればいいのか見当がつかない。" },
              { icon: "💸", title: "高額なシステムは導入できない", desc: "大手SIerの見積もりは数百万。中小企業には到底手が出せない。" },
              { icon: "😫", title: "過去にIT導入して失敗した経験がある", desc: "システムを入れたが現場のスタッフが使いこなせず、結局元の手作業に戻った。" },
            ].map((p, i) => (
              <div key={i} className="card problem-card">
                <div className="problem-icon">{p.icon}</div>
                <div>
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Strengths ===== */}
      <section>
        <div className="container" style={{ textAlign: "center" }}>
          <span className="section-label">なぜアキラに任せるのか</span>
          <h2 className="section-title">3つの強み</h2>
          <p className="section-desc">
            技術だけのコンサルとは一線を画す、現場発の強みです。
          </p>
          <div className="strengths-grid">
            {[
              { n: "01", title: "運輸現場10年の叩き上げ", desc: "配車・点呼・倉庫管理を全て経験。現場のオペレーション・作業者の心理・業務の非効率ポイントを体で知っています。" },
              { n: "02", title: "自分のビジネスで実証済み", desc: "6事業を同時運営する中で、自分自身がAI・自動化を日常的に使い、ROIを検証済み。「理論」ではなく「実践」でお話します。" },
              { n: "03", title: "結果にコミット。定着までサポート", desc: "ツールを入れて終わりではありません。現場スタッフが使いこなすまでレクチャー・サポートを続けます。" },
            ].map((s, i) => (
              <div key={i} className="card strength-card">
                <div className="strength-number">{s.n}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Cases ===== */}
      <section id="cases">
        <div className="container" style={{ textAlign: "center" }}>
          <span className="section-label">実績紹介</span>
          <h2 className="section-title">すべて自社で実証済みの自動化事例</h2>
          <p className="section-desc">
            クライアントに提案する前に、まず自分のビジネスで試して結果を出しています。
          </p>
          <div className="cases-list">
            {CASES.map((c, i) => (
              <div key={i} className="card case-card">
                <div className="case-image">
                  <Image src={c.image} alt={c.title} width={500} height={350} style={{ objectFit: "cover" }} />
                </div>
                <div className="case-content">
                  <span className="case-tag">{c.tag}</span>
                  <h3>{c.title}</h3>
                  <p>{c.desc}</p>
                  <div className="case-metrics">
                    {c.metrics.map((m, j) => (
                      <div key={j} className="case-metric">
                        <span className="case-metric-value">{m.value}</span>
                        <span className="case-metric-label">{m.label}</span>
                      </div>
                    ))}
                  </div>
                  <div className="case-tools">
                    {c.tools.map((t, j) => (
                      <span key={j} className="tool-tag">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Plans ===== */}
      <section id="plans">
        <div className="container" style={{ textAlign: "center" }}>
          <span className="section-label">料金プラン</span>
          <h2 className="section-title">シンプルな料金体系</h2>
          <p className="section-desc">
            初回相談は無料です。まずはお気軽にお問い合わせください。
          </p>
          <div className="plans-grid">
            {PLANS.map((p, i) => (
              <div key={i} className={`card plan-card ${p.featured ? "featured" : ""}`}>
                {p.featured && <span className="plan-badge">おすすめ</span>}
                <div className="plan-name">{p.name}</div>
                <div className="plan-price">
                  {p.price}<small>{p.unit}</small>
                </div>
                <p style={{ color: "var(--text-muted)", fontSize: "0.85rem", marginTop: "4px" }}>{p.desc}</p>
                <ul className="plan-features">
                  {p.features.map((f, j) => (
                    <li key={j}>{f}</li>
                  ))}
                </ul>
                <a href={LINE_URL} className={p.featured ? "btn-primary" : "btn-secondary"} style={{ width: "100%" }}>
                  無料で相談する
                </a>
              </div>
            ))}
          </div>
          <p style={{ color: "var(--text-dim)", fontSize: "0.8rem", marginTop: "24px" }}>
            ※ 月額保守プラン（月5〜10万円）もご用意しています。構築後の安定運用をサポートします。
          </p>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section id="faq">
        <div className="container" style={{ textAlign: "center" }}>
          <span className="section-label">FAQ</span>
          <h2 className="section-title">よくある質問</h2>
          <div style={{ marginTop: "48px" }}>
            <div className="faq-list">
              {FAQS.map((f, i) => (
                <div key={i} className="faq-item">
                  <div className="faq-question">{f.q}</div>
                  <div className="faq-answer">{f.a}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-box">
            <span className="section-label">まずは無料相談から</span>
            <h2>
              「こんな業務を自動化できる？」
              <br />
              <span className="accent-text">その質問だけでもOKです</span>
            </h2>
            <p>
              初回相談は完全無料。売り込みは一切しません。
              <br />
              LINEで気軽にお問い合わせください。
            </p>
            <a href={LINE_URL} className="btn-primary" style={{ fontSize: "1.1rem", padding: "18px 48px" }}>
              🟢 LINEで無料相談する
            </a>
          </div>
        </div>
      </section>

      {/* ===== Footer ===== */}
      <footer className="footer">
        <div className="container">
          <p>© 2026 高橋晟（アキラ）— AIエージェント・業務自動化構築代行</p>
        </div>
      </footer>
    </>
  );
}
