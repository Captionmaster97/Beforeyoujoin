import type { Metadata } from "next"; import "./globals.css";
export const metadata: Metadata = {title:"Before You Join",description:"Your campus journey starts before day one."};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
