import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "高橋晟（アキラ）| AIエージェント・業務自動化構築代行",
  description: "運輸現場10年の経験 × AI。現場を知るプロが、あなたの業務をAIで自動化します。使われないシステムは作りません。",
  openGraph: {
    title: "高橋晟（アキラ）| AIエージェント・業務自動化構築代行",
    description: "運輸現場10年の経験 × AI。現場を知るプロが、あなたの業務をAIで自動化します。",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
