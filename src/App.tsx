import RailNav from './components/RailNav'
import Marquee from './components/Marquee'
import Cover from './sections/Cover'
import Manifesto from './sections/Manifesto'
import Collection from './sections/Collection'
import Looks from './sections/Looks'
import Contact from './sections/Contact'

export default function App() {
  return (
    <>
      <RailNav />
      <Cover />
      <Manifesto />
      <Marquee />
      <Collection />
      <Looks />
      <Contact />
    </>
  )
}
