import './App.css'
import Footer from './components/footer'
import Header from './components/header'
import PromptPage from './pages/prompt'

function App() {

  return (
    <section className='min-h-dvh grid grid-rows-[auto_1fr_auto]'>
    <Header />
    <PromptPage />
    <Footer />
    </section>
  )
}

export default App
