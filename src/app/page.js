import Image from 'next/image'
import SearchForm from './component/searchForm/searchForm'
import Footer from './component/footer/footer'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
        <div className={styles.logo}>
          <a
            href="https://www.cv-library.co.uk/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
            className={styles.img}
              src="/Logo white.svg"
              alt="Logo white Logo"
              width={350}
              height={133}
              priority
            />
          </a>
        </div>
        <SearchForm />
        <Footer />
    </main>
  )
}
