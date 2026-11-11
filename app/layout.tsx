import type { Metadata } from "next"; import "./globals.css";
export const metadata:Metadata={title:"NOT THE END | 대진대학교 제25회 졸업영화제",description:"대진대학교 영화영상학과 제25회 졸업영화제"};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="ko"><body>{children}</body></html>}
