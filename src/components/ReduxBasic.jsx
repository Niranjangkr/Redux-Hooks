import { useSelector, useDispatch } from 'react-redux'
import { IncNum,decNum } from '../actions'


const ReduxBasic = () => {
    const dispatch = useDispatch()
    const myState = useSelector(state => state.changeTheNumber)
    return (
        <>
            <div className="container">
                <h1>Increment/Decrement counter</h1>
                <h4>Using React and Redux</h4>

                <div className="quantity">
                    <a className="quantity_minus" title='Decrement' onClick={() => dispatch(decNum(5))}><span>-</span></a>
                    <input type="text" name='quantity' className='quantity_input' value={myState} />
                    <a className="quantity_minus" title='Decrement' onClick={() => dispatch(IncNum(5))}><span>+</span></a>
                </div>
            </div>
        </>
    )
}

export default ReduxBasic