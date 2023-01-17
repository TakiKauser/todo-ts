import Header from './common/Header'
import Main from './common/Main'
import Footer from './common/Footer'

const TheLayout = () => {
  return (
    <>
        <nav>
            <Header />
        </nav>
        <main>
            <Main />
        </main>
        <footer>
            <Footer />
        </footer>
    </>
  )
}

export default TheLayout