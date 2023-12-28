import './app.scss'
import { Navbar } from './components/navbar/Navbar'

const App = () => {
  return (
    <div>
      <section>
        {' '}
        <Navbar />
      </section>
      <section>Parallax</section>
      <section>Projects 1</section>
      <section>Parallax</section>
      <section>Contacts</section>
    </div>
  )
}

export default App
