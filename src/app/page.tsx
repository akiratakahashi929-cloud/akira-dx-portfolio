import Image from "next/image";

const LINE_URL = "https://lin.ee/m8ae4Ub";
const FORM_URL = "https://forms.gle/placeholder"; // TODO: Replace with actual Google Form URL

const TOOLS = [
  {
    name: "日報デジタル化パック",
    price: "5万円〜",
    period: "最短1週間",
    desc: "タブレット入力 → 自動集計ダッシュボード。紙の日報から卒業し、集計時間を90%削減。",
    savings: "月4万円のコスト削減",
    features: ["タブレット入力フォーム", "自動集計ダッシュボード", "PDF出力機能", "操作マニュアル付き"],
  },
  {
    name: "問い合わせAI対応パック",
    price: "10万円〜",
    period: "最短5日",
    desc: "よくある質問にAIが自動回答。対応時間ゼロで、本質的な相談だけが担当者に届く仕組み。",
    savings: "月5時間の対応時間削減",
    features: ["AIチャットボット構築", "FAQ学習済みモデル", "Slack/LINE連携", "回答精度チューニング"],
    featured: true,
  },
  {
    name: "請求書自動化パック",
    price: "8万円〜",
    period: "最短5日",
    desc: "フォーム入力だけでPDF請求書を自動生成・メール送付。転記ミスゼロ、作成時間95%削減。",
    savings: "月3万円のコスト削減",
    features: ["入力フォーム", "PDF自動生成", "メール自動送付", "台帳自動記録"],
  },
];

const CASES = [
  {
    tag: "運輸・物流",
    title: "紙の日報 → デジタル化で集計時間90%削減",
    desc: "毎日1時間かかっていたExcel転記作業を、タブレット入力＋自動集計ダッシュボードで30分に短縮。",
    image: "/images/case-dashboard.png",
    metrics: [
      { value: "-90%", label: "集計時間" },
      { value: "月20h", label: "削減時間" },
      { value: "月4万円", label: "コスト削減" },
      { value: "2週間", label: "構築期間" },
    ],
    tools: ["Notion", "Google Forms", "Make"],
  },
  {
    tag: "6事業横断",
    title: "SNS運用の完全自動化 — 投稿管理80%削減",
    desc: "6事業分のSNS投稿を手動管理していた状態から、コンテンツDB＋AI下書き＋自動投稿の仕組みを構築。",
    image: "/images/case-automation.png",
    metrics: [
      { value: "-80%", label: "管理時間" },
      { value: "月12h", label: "削減時間" },
      { value: "月2.4万円", label: "コスト削減" },
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
      { value: "月1万円", label: "コスト削減" },
      { value: "1.5週", label: "構築期間" },
    ],
    tools: ["Dify", "Slack", "Notion"],
  },
  {
    tag: "バックオフィス",
    title: "請求書・見積書の自動生成ワークフロー",
    desc: "フォーム入力だけで請求書PDFを自動生成しメールで自動送付。転記ミスゼロ・作成時間を95%削減。",
    image: "/images/case-invoice.png",
    metrics: [
      { value: "-95%", label: "作成時間" },
      { value: "ミス0", label: "転記エラー" },
      { value: "月2万円", label: "コスト削減" },
      { value: "5日", label: "構築期間" },
    ],
    tools: ["Google Forms", "Make", "PDF API", "Gmail"],
  },
  {
    tag: "経営管理",
    title: "AIで6つの事業を\"ほぼ放置\"で回す仕組み",
    desc: "KPI追跡・週次レポート・タスク振り分けをAIが自動処理。経営者が本当にやるべき仕事にだけ集中できる環境を構築。",
    image: "/images/case-orchestration.png",
    metrics: [
      { value: "-83%", label: "管理工数" },
      { value: "月25h", label: "削減時間" },
      { value: "月5万円", label: "コスト削減" },
      { value: "2週間", label: "構築期間" },
    ],
    tools: ["Claude", "Notion", "Make", "自社プロンプト"],
  },
];

const PLANS = [
  {
    name: "ツール導入",
    price: "5〜15",
    unit: "万円",
    desc: "パッケージツールをそのまま導入",
    features: ["構築済みツール納品", "操作マニュアル付き", "導入サポート（1回）", "チャットサポート2週間"],
    featured: false,
  },
  {
    name: "カスタム構築",
    price: "30〜50",
    unit: "万円",
    desc: "業務に合わせたオーダーメイド自動化",
    features: ["業務フロー診断", "オーダーメイド構築", "Make/Zapier連携", "操作マニュアル作成", "Zoom説明会", "テスト・調整込み"],
    featured: true,
  },
  {
    name: "フル最適化",
    price: "50〜80",
    unit: "万円",
    desc: "複数業務を丸ごとDX化",
    features: ["AI＋自動化の複合システム", "AIエージェント構築", "全フロー最適化", "スタッフ研修", "保守サポート1ヶ月付き"],
    featured: false,
  },
];

const FAQS = [
  {
    q: "ツールだけ購入して自分で運用できますか？",
    a: "はい、できます。すべてのパッケージツールには操作マニュアルが付属しています。導入後のサポートも含まれていますので、ITに不慣れでも安心してお使いいただけます。",
  },
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
            <li><a href="#tools">ツール一覧</a></li>
            <li><a href="#cases">実績</a></li>
            <li><a href="#plans">料金</a></li>
            <li><a href="#faq">FAQ</a></li>
          </ul>
          <a href={LINE_URL} className="btn-primary nav-cta" aria-label="LINEで無料相談する">
            無料で相談する
          </a>
        </div>
      </nav>

      {/* ===== Hero ===== */}
      <section className="hero">
        <div className="container">
          <span className="hero-badge animate-fade-in">現場を知るプロが作った、即戦力の業務自動化ツール</span>
          <h1 className="animate-fade-in-delay1">
            業務時間<span className="accent-text">−90%</span>。
            <br />
            あなたの「手作業」を、AIが引き受けます。
          </h1>
          <p className="hero-subtitle animate-fade-in-delay2">
            使われないシステムは作りません。
            <br />
            パッケージ導入なら最短5日。カスタム構築でも2週間で稼働開始。
          </p>
          <div className="hero-buttons animate-fade-in-delay3">
            <a href="#tools" className="btn-primary btn-hero" id="hero-cta">
              すぐ導入できるツールを見る
            </a>
            <a href={LINE_URL} className="btn-secondary">
              無料で相談する
            </a>
          </div>
          <p className="hero-trust animate-fade-in-delay3">
            30秒で完了 &nbsp;|&nbsp; 売り込み一切なし &nbsp;|&nbsp; 完全無料
          </p>

          <div className="stats animate-fade-in-delay3">
            <div className="stat-item">
              <div className="stat-value">-90%</div>
              <div className="stat-label">業務時間削減</div>
            </div>
            <div className="stat-item">
              <div className="stat-value">累計1,200h+</div>
              <div className="stat-label">削減した業務時間</div>
            </div>
            <div className="stat-item">
              <div className="stat-value">最短5日</div>
              <div className="stat-label">導入スピード</div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Problem ===== */}
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
              { icon: "🤷", title: "何から始めればいいか分からない", desc: "「AIで効率化したい」。でも情報が多すぎて正解が見えない。G-knotでは、パッケージ導入なら選ぶだけですぐ始められます。" },
              { icon: "💸", title: "大手の見積もりは500万円〜", desc: "DXしたいのに、大手SIerは数百万。G-knotは5万円〜導入可能。中小企業でも手が届く価格帯で提供しています。" },
              { icon: "😫", title: "IT導入で失敗した過去がある", desc: "システムを入れたのに、現場が使いこなせず元に戻った。G-knotは「現場で使われるUI」を最優先に設計します。" },
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

      {/* ===== Tool Catalog（すぐ導入できるパッケージ）===== */}
      <section id="tools">
        <div className="container" style={{ textAlign: "center" }}>
          <span className="section-label">すぐに導入できる</span>
          <h2 className="section-title">
            <span className="accent-text">パッケージツール</span>一覧
          </h2>
          <p className="section-desc">
            選ぶだけですぐ導入。カスタマイズが必要な場合も、ベースがあるから早い・安い。
          </p>
          <div className="tools-grid">
            {TOOLS.map((t, i) => (
              <div key={i} className={`card tool-card ${t.featured ? "featured" : ""}`}>
                {t.featured && <span className="plan-badge">人気 No.1</span>}
                <h3 className="tool-card-name">{t.name}</h3>
                <div className="tool-card-price">
                  {t.price}<small>〜</small>
                </div>
                <p className="tool-card-desc">{t.desc}</p>
                <div className="tool-card-meta">
                  <span className="tool-card-meta-item">
                    <strong>{t.period}</strong>で導入
                  </span>
                  <span className="tool-card-meta-item tool-card-savings">
                    {t.savings}
                  </span>
                </div>
                <ul className="plan-features">
                  {t.features.map((f, j) => (
                    <li key={j}>{f}</li>
                  ))}
                </ul>
                <a href={LINE_URL} className="btn-primary" style={{ width: "100%" }}>
                  このツールについて相談する
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Cases ===== */}
      <section id="cases">
        <div className="container" style={{ textAlign: "center" }}>
          <span className="section-label">導入事例</span>
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

      {/* ===== Mid-page CTA（LINE + Form 二択）===== */}
      <section className="mid-cta-section">
        <div className="container">
          <div className="mid-cta-box">
            <h3>ここまで読んで「うちでもできるかも」と思ったら</h3>
            <div className="cta-dual">
              <a href={LINE_URL} className="btn-primary btn-mid-cta" id="mid-cta-line">
                LINEで相談する
              </a>
              <a href={FORM_URL} className="btn-secondary btn-mid-cta" id="mid-cta-form" target="_blank" rel="noopener noreferrer">
                メールで問い合わせる
              </a>
            </div>
            <p className="mid-cta-note">30秒で完了・売り込みなし・完全無料</p>
          </div>
        </div>
      </section>

      {/* ===== Affinity ===== */}
      <section className="affinity-section">
        <div className="container">
          <div className="affinity-box">
            <span className="section-label">なぜ「現場が分かる」と言い切れるのか</span>
            <h2 className="section-title" style={{ textAlign: "center" }}>
              私も、<span className="accent-text">まったく同じ苦しみ</span>を経験しました
            </h2>
            <div className="affinity-story">
              <div className="affinity-item">
                <div className="affinity-quote">&ldquo;</div>
                <p>
                  月125時間の残業をしながら、毎日手書きの日報を集計していました。
                  深夜にExcelと格闘しながら「この作業、意味あるのか」と何度も思いました。
                </p>
              </div>
              <div className="affinity-item">
                <div className="affinity-quote">&ldquo;</div>
                <p>
                  ITに詳しくないドライバーにシステムを使ってもらうために、何度もツールを変え、画面を作り直しました。
                  <strong>「現場で使われなければ、どんなシステムも意味がない」</strong> — 身をもって学びました。
                </p>
              </div>
              <div className="affinity-item">
                <div className="affinity-quote">&ldquo;</div>
                <p>
                  その泥臭い経験があるから、あなたの現場に本当に合うシステムを作れます。
                  机の上で設計書を書くだけのコンサルとは、<strong>スタート地点が違います。</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Profile（顧客視点） ===== */}
      <section>
        <div className="container">
          <div className="profile-section">
            <div className="profile-info">
              <div className="profile-name">G-knot 代表</div>
              <div className="profile-title">運輸企業取締役 × AI・自動化コンサルタント</div>
              <p className="profile-bio">
                高卒から大手引越会社に入社。月残業125時間の運輸現場で叩き上げ、取締役に昇格。
                その後、自らの業務課題を解決するためにAI×自動化のスキルを独学で習得。
                現在は6事業を同時運営しながら、<strong>累計1,200時間以上の業務時間削減</strong>を実現。
                「現場で本当に使われるか」を最優先に設計するスタイルで、導入後の定着率にコミットします。
              </p>
              <div className="profile-timeline">
                <span className="timeline-tag">高卒</span>
                <span className="timeline-tag">→ 大手引越会社</span>
                <span className="timeline-tag">→ 月残業125h</span>
                <span className="timeline-tag">→ 取締役昇格</span>
                <span className="timeline-tag">→ 6事業運営</span>
                <span className="timeline-tag accent-tag">→ 累計1,200h+削減</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Solution ===== */}
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

      {/* ===== Tech Advantage: AIエージェント活用 ===== */}
      <section className="section-dark">
        <div className="container" style={{ textAlign: "center" }}>
          <span className="section-label">なぜ安く・速く提供できるのか</span>
          <h2 className="section-title">
            <span className="accent-text">AIエージェント</span>を活用した構築体制
          </h2>
          <p className="section-desc" style={{ maxWidth: "680px" }}>
            G-knotでは、AIエージェントを活用してツールの構築・テスト・保守を効率化しています。
            だから、大手の1/10のコストで、同等以上の品質を実現できます。
          </p>
          <div className="tech-grid">
            <div className="card tech-card">
              <div className="tech-icon">⚙️</div>
              <h3>サーバー管理不要</h3>
              <p>クラウドネイティブな設計で、サーバーの管理・保守コストがゼロ。月額の維持費を最小限に抑えます。</p>
            </div>
            <div className="card tech-card">
              <div className="tech-icon">⏱️</div>
              <h3>最短1週間で導入</h3>
              <p>AIエージェントが構築を補助するため、従来3ヶ月かかるシステムを最短1〜2週間で稼働開始。</p>
            </div>
            <div className="card tech-card">
              <div className="tech-icon">🔄</div>
              <h3>既存フローを変えない</h3>
              <p>お使いのExcel・メール・紙の業務フローを壊しません。今の仕事の「面倒な部分だけ」を自動化します。</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Narrow Down ===== */}
      <section className="narrow-section">
        <div className="container" style={{ textAlign: "center" }}>
          <span className="section-label">このサービスが合う方</span>
          <h2 className="section-title">
            すべての企業にお勧めしているわけでは<span className="accent-text">ありません</span>
          </h2>
          <div className="narrow-grid">
            <div className="card narrow-card narrow-yes">
              <h3><span className="icon-check">✓</span> こんな方にぴったりです</h3>
              <ul>
                <li>従業員10〜100名の中小企業の経営者・管理職</li>
                <li>「AIに興味はあるが、何から始めるか分からない」方</li>
                <li>大手SIerの見積もりに「高すぎる」と感じた方</li>
                <li>過去にIT導入で失敗し、今度こそ成功させたい方</li>
                <li>現場スタッフがITに弱く、使いやすさを重視したい方</li>
              </ul>
            </div>
            <div className="card narrow-card narrow-no">
              <h3><span className="icon-cross">×</span> こんな方には向いていません</h3>
              <ul>
                <li>既に社内にIT部門があり、自社開発が可能な企業</li>
                <li>「とりあえず流行ってるから」という動機だけの方</li>
                <li>最安値だけを追求し、品質や定着率は二の次の方</li>
              </ul>
            </div>
          </div>
          <div className="narrow-urgency">
            <div className="urgency-box">
              <p className="urgency-icon-styled">限定</p>
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
            パッケージ導入は5万円〜。初回相談は完全無料です。
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

      {/* ===== Final CTA（LINE + Form 二択）===== */}
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
                <span className="benefit-check">✓</span>
                <span>30分の無料診断で「自動化できるポイント」を<strong>3つ</strong>お伝えします</span>
              </div>
              <div className="cta-benefit-item">
                <span className="benefit-check">✓</span>
                <span>売り込みは一切しません。合わなければそれでOK</span>
              </div>
              <div className="cta-benefit-item">
                <span className="benefit-check">✓</span>
                <span>相談後、<strong>改善提案レポートを無料</strong>でお渡しします</span>
              </div>
            </div>

            <div className="cta-dual">
              <a href={LINE_URL} className="btn-primary btn-final-cta" id="final-cta-line">
                LINEで無料相談する
              </a>
              <a href={FORM_URL} className="btn-secondary btn-final-cta-form" id="final-cta-form" target="_blank" rel="noopener noreferrer">
                メールで問い合わせる
              </a>
            </div>

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
