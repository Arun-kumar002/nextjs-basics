export const metadata = {
  title: 'Demo app',
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
