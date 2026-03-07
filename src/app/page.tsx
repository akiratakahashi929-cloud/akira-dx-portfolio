import Image from "next/image";

const LINE_URL = "https://lin.ee/m8ae4Ub";

const CASES = [
  {
    tag: "運輸・物流",
    title: "紙の日報 → デジタル化で集計時間90%削減",
    desc: "毎日1時間かかっていたExcel転記作業を、タブレット入力＋自動集計ダッシュボードで30分に短縮。月20時間・月4万円のコスト削減を実現。",
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
    desc: "6事業分のSNS投稿を手動管理していた状態から、コンテンツDB＋AI下書き＋自動投稿の仕組みを構築。月15時間→3時間に。",
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
    title: "問い合わせ対応AIチャットボット構築",
    desc: "同じ質問への重複対応をAIが自動化。初期対応時間がほぼゼロに。本質的な相談だけが人間に届く仕組み。",
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
    title: "請求書・見積書の自動生成ワークフロー",
    desc: "フォーム入力だけで請求書PDFを自動生成しメールで自動送付。転記ミスゼロ・毎月の作成時間を95%削減。",
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
    title: "AIで6つの事業を\"ほぼ放置\"で回す仕組み",
    desc: "KPI追跡・週次レポート・タスク振り分けをAIが自動処理。経営者が本当にやるべき仕事にだけ集中できる環境を構築。管理工数を月30時間→5時間に。",
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
    desc: "「まずAIを試したい」方向け",
    features: ["AI活用コンサルティング", "プロンプト設計", "業務フロー診断", "改善提案レポート"],
    featured: false,
  },
  {
    name: "スタンダード",
    price: "30〜50",
    unit: "万円",
    desc: "「この業務を自動化したい」方向け",
    features: ["業務自動化フロー構築", "Make/Zapier連携", "操作マニュアル作成", "Zoom説明会", "テスト・調整込み"],
    featured: true,
  },
  {
    name: "プレミアム",
    price: "50〜80",
    unit: "万円",
    desc: "「根本から仕組みを変えたい」方向け",
    features: ["AI＋自動化の複合システム", "AIエージェント構築", "全フロー最適化", "スタッフ研修", "保守サポート1ヶ月付き"],
    featured: false,
  },
];

const FAQS = [
  {
    q: "うちの社員はITに詳しくないけど使えますか？",
    a: "はい、使えます。「あなたの社員が使えるかどうか」を最優先に設計します。私自身、現場ドライバーにタブレット操作を教えてきた経験があるので、ITが苦手な方への寄り添い方を知っています。",
  },
  {
    q: "どのツールを使いますか？",
    a: "課題に合わせて最適なものを選びます。特定のツールを売り込むことは一切しません。Make、Zapier、Claude、GPT、Notion等から、あなたの会社に最適な組み合わせを選びます。",
  },
  {
    q: "補助金は使えますか？",
    a: "IT導入補助金・ものづくり補助金の対象になる可能性があります。申請サポートも行っていますので、お気軽にご相談ください。",
  },
  {
    q: "他のコンサルと何が違うんですか？",
    a: "「運輸現場を10年経験した人間がAIを入れる」のが最大の違いです。技術だけの人は「動くシステム」を作れますが、「現場で使われるシステム」は作れません。導入後の定着率にコミットします。",
  },
];

export default function Home() {
  return (
    <>
      {/* ===== Nav ===== */}
      <nav className="nav" role="navigation" aria-label="メインナビゲーション">
        <div className="container nav-inner">
          <a href="#" className="nav-logo" aria-label="G-knot トップへ">
            G-<span>knot</span>
          </a>
          <ul className="nav-links">
            <li><a href="#problems">よくある悩み</a></li>
            <li><a href="#cases">実績</a></li>
            <li><a href="#plans">料金</a></li>
            <li><a href="#faq">FAQ</a></li>
          </ul>
          <a href={LINE_URL} className="btn-primary nav-cta" aria-label="LINEで無料相談する">
            無料で相談する
          </a>
        </div>
      </nav>

      {/* ===== Hero (Attention) ===== */}
      <section className="hero">
        <div className="container">
          <span className="hero-badge animate-fade-in">運輸現場出身 × AI自動化のプロ</span>
          <h1 className="animate-fade-in-delay1">
            業務時間<span className="accent-text">−90%</span>。
            <br />
            あなたの「手作業」を、AIが引き受けます。
          </h1>
          <p className="hero-subtitle animate-fade-in-delay2">
            使われないシステムは作りません。
            <br />
            現場を10年知るプロが、導入後の定着までコミットします。
          </p>
          <div className="hero-buttons animate-fade-in-delay3">
            <a href={LINE_URL} className="btn-primary btn-hero" id="hero-cta">
              私の業務も自動化できるか聞いてみる
            </a>
            <a href="#cases" className="btn-secondary">
              実績を見る →
            </a>
          </div>
          <p className="hero-trust animate-fade-in-delay3">
            30秒で完了  |  売り込み一切なし  |  完全無料
          </p>

          <div className="stats animate-fade-in-delay3">
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

      {/* ===== P: Problem（問題提起＋煽り）===== */}
      <section id="problems" className="section-dark">
        <div className="container" style={{ textAlign: "center" }}>
          <span className="section-label">見て見ぬふり、していませんか？</span>
          <h2 className="section-title">
            放置すれば<span className="accent-text">年間240時間＝48万円</span>の損失です
          </h2>
          <p className="section-desc" style={{ maxWidth: "680px" }}>
            毎日同じ作業に追われて、本来やるべき仕事ができない。
            2024年問題で人手不足が加速する今、紙の業務を続ける企業は確実に取り残されます。
          </p>
          <div className="problems-grid">
            {[
              { icon: "📋", title: "紙・Excelの手作業が多すぎる", desc: "毎日のExcel転記に1時間。年間240時間。人件費に換算すると48万円。この作業、AIなら5分で終わります。" },
              { icon: "🤷", title: "何から始めればいいか分からない", desc: "「AIで効率化したい」。でも情報が多すぎて正解が見えない。検討しているうちに、競合はどんどん先に行きます。" },
              { icon: "💸", title: "大手の見積もりは500万円〜", desc: "DXしたいのに、大手SIerは数百万。中小企業には手が出せない。でも安い外注は品質が不安 — その板挟み、解決します。" },
              { icon: "😫", title: "IT導入で失敗した過去がある", desc: "システムを入れたのに、現場が使いこなせず元に戻った。「あの投資は何だったのか」 — 同じ後悔は、もうしたくないはずです。" },
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
                  ITに詳しくないドライバーにシステムを使ってもらうために、何度もツールを変え、画面を作り直しました。
                  <strong>「現場で使われなければ、どんなシステムも意味がない」</strong> — 身をもって学びました。
                </p>
              </div>
              <div className="affinity-item">
                <div className="affinity-quote">"</div>
                <p>
                  その泥臭い経験があるから、あなたの現場に本当に合うシステムを作れます。
                  机の上で設計書を書くだけのコンサルとは、<strong>スタート地点が違います。</strong>
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
              <div className="profile-name">G-knot 代表</div>
              <div className="profile-title">運輸企業取締役 × AI・自動化コンサルタント</div>
              <p className="profile-bio">
                高卒から大手引越会社に入社。月残業125時間の運輸現場で叩き上げ、取締役に昇格。
                現在はAI×自動化で6事業を同時運営し、年収1,800万円を達成。
                AIと自動化のスキルは、自分のビジネスを回すために身につけました。
                だから「技術の理論」ではなく<strong>「実際にどう儲かるか」</strong>でお話できます。
              </p>
              <div className="profile-timeline">
                <span className="timeline-tag">高卒</span>
                <span className="timeline-tag">→ 大手引越会社</span>
                <span className="timeline-tag">→ 月残業125h</span>
                <span className="timeline-tag">→ 取締役昇格</span>
                <span className="timeline-tag">→ 6事業運営</span>
                <span className="timeline-tag accent-tag">→ 年収1,800万</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SO: Solution ===== */}
      <section>
        <div className="container" style={{ textAlign: "center" }}>
          <span className="section-label">だから、こう解決します</span>
          <h2 className="section-title">あなたの業務を変える<span className="accent-text">3つのアプローチ</span></h2>
          <p className="section-desc">
            技術を売り込むのではなく、現場の課題から逆算して仕組みを作ります。
          </p>
          <div className="strengths-grid">
            {[
              { n: "01", title: "まず現場を見る。ヒアリングから始める", desc: "いきなりツールの話はしません。業務フローを一緒に洗い出し、「どこが本当のボトルネックか」を特定。現場を10年知っているから、見えるポイントが違います。" },
              { n: "02", title: "自分で実証済みのツールだけ提案する", desc: "6事業を回す中で、毎日AI・自動化を使い、ROIを検証済み。「この組み合わせで月20時間削減できた」と実績ベースでお話します。" },
              { n: "03", title: "導入して終わりじゃない。定着まで伴走する", desc: "ツールを入れて納品書を渡して終わり — そんなことはしません。現場スタッフが「これ便利だね」と使い始めるまで、サポートを続けます。" },
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

      {/* ===== Cases（実績）===== */}
      <section id="cases">
        <div className="container" style={{ textAlign: "center" }}>
          <span className="section-label">実績紹介</span>
          <h2 className="section-title">すべて<span className="accent-text">自社で実証済み</span>の自動化事例</h2>
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

      {/* ===== Mid-page CTA（離脱防止）===== */}
      <section className="mid-cta-section">
        <div className="container">
          <div className="mid-cta-box">
            <h3>ここまで読んで「うちでもできるかも」と思ったら</h3>
            <a href={LINE_URL} className="btn-primary btn-mid-cta" id="mid-cta">
              私の会社でも自動化できるか聞いてみる
            </a>
            <p className="mid-cta-note">30秒で完了・売り込みなし・完全無料</p>
          </div>
        </div>
      </section>

      {/* ===== N: Narrow Down ===== */}
      <section className="narrow-section">
        <div className="container" style={{ textAlign: "center" }}>
          <span className="section-label">このサービスが合う方</span>
          <h2 className="section-title">
            すべての企業にお勧めしているわけでは<span className="accent-text">ありません</span>
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
              <h3>❌ こんな方には向いていません</h3>
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
                現在の空き枠: <span className="accent-text urgency-number">残り2社</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Plans ===== */}
      <section id="plans">
        <div className="container" style={{ textAlign: "center" }}>
          <span className="section-label">料金プラン</span>
          <h2 className="section-title">シンプルで明確な料金体系</h2>
          <p className="section-desc">
            初回相談は完全無料。まずはお気軽にお問い合わせください。
          </p>
          <div className="plans-grid">
            {PLANS.map((p, i) => (
              <div key={i} className={`card plan-card ${p.featured ? "featured" : ""}`}>
                {p.featured && <span className="plan-badge">一番人気</span>}
                <div className="plan-name">{p.name}</div>
                <div className="plan-price">
                  {p.price}<small>{p.unit}</small>
                </div>
                <p className="plan-desc">{p.desc}</p>
                <ul className="plan-features">
                  {p.features.map((f, j) => (
                    <li key={j}>{f}</li>
                  ))}
                </ul>
                <a href={LINE_URL} className={p.featured ? "btn-primary" : "btn-secondary"} style={{ width: "100%" }}>
                  まずは無料で相談する
                </a>
              </div>
            ))}
          </div>
          <p className="plans-note">
            ※ 月額保守プラン（月5〜10万円）もご用意しています。
          </p>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section id="faq">
        <div className="container" style={{ textAlign: "center" }}>
          <span className="section-label">FAQ</span>
          <h2 className="section-title">よくいただく質問</h2>
          <div className="faq-container">
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

      {/* ===== A: Action（最終CTA — 強化版）===== */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-box">
            <span className="section-label">まずは無料相談から</span>
            <h2>
              「こんな業務を自動化できる？」
              <br />
              <span className="accent-text">その一言だけでOKです</span>
            </h2>

            <div className="cta-benefits">
              <div className="cta-benefit-item">
                <span className="benefit-check">✅</span>
                <span>30分の無料診断で「自動化できるポイント」を<strong>3つ</strong>お伝えします</span>
              </div>
              <div className="cta-benefit-item">
                <span className="benefit-check">✅</span>
                <span>売り込みは一切しません。合わなければそれでOK</span>
              </div>
              <div className="cta-benefit-item">
                <span className="benefit-check">✅</span>
                <span>相談後、<strong>改善提案レポートを無料</strong>でお渡しします</span>
              </div>
            </div>

            <a href={LINE_URL} className="btn-primary btn-final-cta" id="final-cta">
              私の業務の「自動化診断」を無料で受ける
            </a>

            <p className="cta-urgency">
              3月の無料診断枠: <strong className="accent-text">残り2名</strong>（先着順）
            </p>
          </div>
        </div>
      </section>

      {/* ===== Footer ===== */}
      <footer className="footer">
        <div className="container">
          <p>© 2026 G-knot — AI・業務自動化構築代行</p>
        </div>
      </footer>

      {/* ===== Floating Mobile CTA ===== */}
      <div className="floating-cta">
        <a href={LINE_URL} className="btn-primary floating-cta-btn" id="floating-cta">
          無料で相談する
        </a>
      </div>
    </>
  );
}
