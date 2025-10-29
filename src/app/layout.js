import './globals.css'

export const metadata = {
  title: 'Portfolio - Lt Col (Retd) Muhammad Arif',
  description: 'Portfolio landing page',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-screen text-slate-100">
        {children}
      </body>
    </html>
  )
}
