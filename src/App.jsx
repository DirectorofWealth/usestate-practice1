import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Counter from './components/Counter'
import AddTwo from './components/AddTwo'
import ToggleDark from './components/ToggleDark'
import DelayedCounter from './components/DelayedCounter'
import IntervalCounter from './components/IntervalCounter'
import TodoList from './components/TodoList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

    {/* <Counter /> */}
    {/* <AddTwo /> */}
    {/* <ToggleDark /> */}
    {/* <DelayedCounter /> */}
    {/* <IntervalCounter /> */}
    <TodoList />
     
    </>
  )
}

export default App
