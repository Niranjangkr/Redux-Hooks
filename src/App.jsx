import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { IncNum,decNum } from './actions'
import ReduxBasic from './components/ReduxBasic'

function App() {
  // const [count, setCount] = useState(0)
  const myState = useSelector((state) => state.changeTheNumber  )
  return (
    <>
      <ReduxBasic/>
    </>
  )
}

export default App
