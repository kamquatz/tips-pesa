import { Navbar, Footer } from '@/components'
import './globals.css'

export const metadata = {
  title: 'TipsPesa',
  description: 'Sure Soccer Prediction Matches Daily -- With over 95% Accuracy',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='relative'>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
