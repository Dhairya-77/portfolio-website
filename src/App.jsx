import Header from './sections/header'
import Home from './sections/home'
import About from './sections/about'
import Footer from './sections/footer'
import './index.css'

function App() {

  return (
    <>
      <Header/>
      <main>
        <section id="home"> <Home/> </section>
        <section id="about"> <About/> </section>
      </main>
      <Footer/>
    </>
  )
}

export default App