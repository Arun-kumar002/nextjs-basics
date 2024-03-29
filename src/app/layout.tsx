import { Metadata } from "next";
export const metadata: Metadata = {
  title: {
    absolute:"",
    default:"Next js layout",
    template:"%s | Test"
  },
  description: 'Generated by Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <h1>header</h1>
        {children}
        <h1>footer</h1>
      </body>
    </html>
  )
}
