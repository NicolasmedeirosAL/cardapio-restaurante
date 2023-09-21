import '@/styles/globals.css'

import { Poppins, Dancing_Script } from '@next/font/google'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-poppins'
})

const dancing_script = Dancing_Script({
  subsets: ['latin'],
  variable: '--font-dancing-script'
})


export default function App({ Component, pageProps }) {
  return (
    <>
      <main className={`${poppins.variable} ${dancing_script.variable}`}>
        <Component {...pageProps} />
      </main>
    </>
  )
}
