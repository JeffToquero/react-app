import Header from './Header'
import Footer from './Footer.jsx'
import Food from './Food.jsx'
import Mathcomponent from './assets/component/Mathcomponent.jsx'
import Hello from './assets/component/Hello.jsx'

function App() {
  const person = {
    name: 'Rob',
    message: 'Hi there',
    emoji: '👋',
    seatNumbers: [1, 4, 7],
  }

  
  return (
    <div>
      <Hello person={person} />
    </div>
  )
}

export default App
