import state from './store/counter';
import {observer} from "mobx-react-lite";
let error =  new Error('Error')

export const StartMaxCont = observer(() => {


    const changeStartValue = (e) => {
        state.setStartValue(e.target.value)
        localStorage.setItem('startValue', e.target.value)
        if(state.startValue >= state.maxValue || state.startValue <= 0) {
            throw error
        }
    }

    const changeMaxValue = (e) => {
        state.setMaxValue(e.target.value)
        localStorage.setItem('maxValue', e.target.value)
        if(state.startValue >= state.maxValue) {
            throw error
        }
    }

    const setValue = () => {
        if(state.startValue < state.maxValue && state.startValue >= 0) {
            state.setValue()
        }
    }

    return (
        <div className="startMaxCont">
            <label>
                MAX VALUE:
                <input type="number" value={state.maxValue} onChange={(e) => changeMaxValue(e)}/>
            </label>
            <label>
                START VALUE:
                <input type="number" value={state.startValue} onChange={(e) => changeStartValue(e)}/>
            </label>
            <button onClick={setValue}>Set</button>
        </div>
    )
})

