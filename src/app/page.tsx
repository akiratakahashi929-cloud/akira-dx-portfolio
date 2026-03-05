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

      {/* ===== P: Problem（問題提起 + 煽り）===== */}
      <section id="problems">
        <div className="container" style={{ textAlign: "center" }}>
          <span className="section-label">見て見ぬふり、していませんか？</span>
          <h2 className="section-title">
            その手作業、<span className="accent-text">毎月いくら</span>損してますか？
          </h2>
          <p className="section-desc" style={{ maxWidth: "700px" }}>
            毎日同じ作業に追われて、本来やるべき仕事ができない。
            そんな状態をあと何年続けますか？ — 2024年問題で人手不足が加速する今、
            紙の業務を続ける企業は確実に取り残されます。
          </p>
          <div className="problems-grid">
            {[
              { icon: "📋", title: "紙の日報・手作業が多すぎる", desc: "毎日のExcel転記、紙の集計作業に何時間もかかっている。ミスも多い。その1時間、年間で240時間。人件費に換算すると48万円の損失です。" },
              { icon: "🤷", title: "AIに興味はあるが何から始めればいいか分からない", desc: "「AIで効率化したい」と思っていても、情報が多すぎて何が正解か分からない。検討しているうちに、競合はどんどん先に行く。" },
              { icon: "💸", title: "大手SIerの見積もりは数百万円", desc: "DXしたくても、大手の見積もりは500万〜1,000万。中小企業には到底手が出せない。でも安い外注は品質が不安。" },
              { icon: "😫", title: "過去にIT導入して失敗した", desc: "システムを入れたが現場のスタッフが使いこなせず、結局元の手作業に戻った。「あの投資は何だったのか」— 同じ失敗は繰り返せない。" },
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

      {/* ===== A: Affinity（親近感・共感）===== */}
      <section className="affinity-section">
        <div className="container">
          <div className="affinity-box">
            <span className="section-label">なぜ「現場が分かる」と言い切れるのか</span>
            <h2 className="section-title" style={{ textAlign: "center" }}>
              私も、<span className="accent-text">まったく同じ苦しみ</span>を経験しました
            </h2>
            <div className="affinity-story">
              <div className="affinity-item">
                <div className="affinity-quote">"</div>
                <p>
                  月125時間の残業をしながら、毎日手書きの日報を集計していました。
                  深夜にExcelと格闘しながら「この作業、意味あるのか」と何度も思いました。
                </p>
              </div>
              <div className="affinity-item">
                <div className="affinity-quote">"</div>
                <p>
                  ITに詳しくないドライバーに新しいシステムを使ってもらうために、
                  何度もツールを変え、画面を作り直しました。
                  <strong>「現場で使われなければ、どんなシステムも意味がない」</strong>
                  — それを身をもって学びました。
                </p>
              </div>
              <div className="affinity-item">
                <div className="affinity-quote">"</div>
                <p>
                  その泥臭い経験があるから、あなたの現場に本当に合うシステムを作れます。
                  机の上で設計書を書くだけのコンサルとは、スタート地点が違います。
                </p>
              </div>
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

      {/* ===== SO: Solution（解決策の提示）===== */}
      <section>
        <div className="container" style={{ textAlign: "center" }}>
          <span className="section-label">だから、こう解決します</span>
          <h2 className="section-title">あなたの業務を変える、<span className="accent-text">3つのアプローチ</span></h2>
          <p className="section-desc">
            技術を売り込むのではなく、現場の課題から逆算して仕組みを作ります。
          </p>
          <div className="strengths-grid">
            {[
              { n: "01", title: "まず現場を見る。ヒアリングから始める", desc: "いきなりツールの話はしません。あなたの業務フローを一緒に洗い出し、「どこが本当のボトルネックか」を特定します。現場を10年知っているから、見えるポイントが違います。" },
              { n: "02", title: "自分で使って効果を実証済みのツールだけ提案", desc: "6事業を同時運営する中で、自分自身がAI・自動化を毎日使い、ROIを検証済み。「理論」ではなく「この組み合わせで月○時間削減できた」と実績ベースでお話します。" },
              { n: "03", title: "導入して終わりじゃない。定着するまで伴走", desc: "ツールを入れて納品書を渡して終わり — そんなことはしません。現場スタッフが「これ便利だね」と言うまで、レクチャーとサポートを続けます。" },
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

      {/* ===== Cases（実績 = Solution の証明）===== */}
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

      {/* ===== N: Narrow Down（絞り込み + 限定性）===== */}
      <section className="narrow-section">
        <div className="container" style={{ textAlign: "center" }}>
          <span className="section-label">このサービスが合う方</span>
          <h2 className="section-title">
            すべての企業に勧めているわけでは<span className="accent-text">ありません</span>
          </h2>

          <div className="narrow-grid">
            <div className="card narrow-card narrow-yes">
              <h3>✅ こんな方にぴったりです</h3>
              <ul>
                <li>従業員10〜100名の中小企業の経営者・管理職</li>
                <li>「AIに興味はあるが、何から始めるか分からない」方</li>
                <li>大手SIerの見積もりに「高すぎる」と感じた方</li>
                <li>過去にIT導入で失敗し、今度こそ成功させたい方</li>
                <li>現場スタッフがITに弱く、使いやすさを重視したい方</li>
              </ul>
            </div>
            <div className="card narrow-card narrow-no">
              <h3>❌ 逆に、こんな方には向いていません</h3>
              <ul>
                <li>既に社内にIT部門があり、自社開発が可能な企業</li>
                <li>「とりあえず流行ってるから」という動機だけの方</li>
                <li>最安値だけを追求し、品質や定着率は二の次の方</li>
              </ul>
            </div>
          </div>

          <div className="narrow-urgency">
            <div className="urgency-box">
              <p className="urgency-icon">⏰</p>
              <p className="urgency-text">
                一人で丁寧に対応するため、<strong>同時に3社まで</strong>しかお受けできません。
              </p>
              <p className="urgency-slots">
                現在の空き枠: <span className="accent-text" style={{ fontSize: "1.5rem", fontWeight: 900 }}>残り2社</span>
              </p>
            </div>
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

      {/* ===== A: Action（行動喚起 — 強化版）===== */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-box">
            <span className="section-label">まずは無料相談から</span>
            <h2>
              「こんな業務を自動化できる？」
              <br />
              <span className="accent-text">その質問だけでもOKです</span>
            </h2>

            <div className="cta-benefits">
              <div className="cta-benefit-item">✅ 30分の無料診断で「自動化できるポイント」を3つお伝えします</div>
              <div className="cta-benefit-item">✅ 売り込みは一切しません。合わなければそれでOK</div>
              <div className="cta-benefit-item">✅ 相談後、改善提案レポートを無料でお渡しします</div>
            </div>

            <a href={LINE_URL} className="btn-primary" style={{ fontSize: "1.1rem", padding: "18px 48px" }}>
              🟢 LINEで無料相談する
            </a>

            <p className="cta-urgency">
              ⏰ 今月の無料相談枠: <strong className="accent-text">残り3名</strong>
            </p>
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
