import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>grubb.scot</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="GRUBB.SCOT" />
      </main>

      <Footer />
    </div>
  )
}
