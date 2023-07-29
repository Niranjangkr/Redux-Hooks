import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { IncNum,decNum } from './actions'
import ReduxBasic from './components/ReduxBasic'
import Child1 from './components/Child1'

function App() {
  // const [count, setCount] = useState(0)
  const myState = useSelector((state) => state.changeTheNumber  )
  return (
    <>
      <ReduxBasic/>
      <Child1 />
    </>
  )
}

export default App
