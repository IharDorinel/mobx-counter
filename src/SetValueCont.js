import state from './store/counter';
import {observer} from "mobx-react-lite";
let error =  new Error('Error')

export const SetValueCont = observer(() => {


    const increment = () => {
        if (state.incValue < state.maxValue) {
        state.increment()
        } else {
            throw error
        }
    }

    const setValue = () => {
        if(state.startValue < state.maxValue && state.startValue >= 0) {
        state.setValue()
        }
    }


    return (
        <div className="setValueCont">
            <input onChange={() => {}} value={state.incValue}/>
            <div>
                <button className="valueBtn" onClick={increment}>Inc</button>
                <button className="valueBtn" onClick={setValue}>Reset</button>
            </div>
        </div>
    )
})


