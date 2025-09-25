import type React from "react"
import type { Metadata } from "next"
import { Montserrat, JetBrains_Mono } from "next/font/google"
// import { Analytics } from "@vercel/analytics/react"
import { Suspense } from "react"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Simon Creative House — Southwest Creative Agency & Cinematic Production Company",
  description:
    "Southwest Creative Agency & Cinematic Production Company. We create cinematic stories people can feel, for brands people can trust. Strategy, creative direction, and production from Scottsdale, AZ.",
  generator: "v0.app",
  icons: {
    icon: "/simon-icon.png",
    shortcut: "/simon-icon.png",
    apple: "/simon-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Oktagon Chat Bubble */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.chatbaseConfig = { 
                chatbotId: 'wRhOqCI0QZBLihaE7mTh', 
                domain: 'https://data.oktagonapp.com',
                assetsBaseUrl: 'https://oktagonapp.com/assets/'
              };
            `,
          }}
        />
        <script src="https://oktagonapp.com/embed-custom-fixed.js" defer />
      </head>
      <body className={`font-sans ${montserrat.variable} ${jetbrainsMono.variable} antialiased`}>
        <ThemeProvider>
          <Suspense fallback={null}>{children}</Suspense>
          {/* <Analytics /> */}
        </ThemeProvider>
      </body>
    </html>
  )
}
