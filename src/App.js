import './App.css';
import {useEffect} from "react";
import state from './store/counter';
import {SetValueCont} from "./SetValueCont";
import {StartMaxCont} from "./StartMaxCont";


const App = () => {

    useEffect(() => {
        state.setStartValue(localStorage.getItem('startValue'))
        state.setMaxValue(localStorage.getItem('maxValue'))
    }, [])



  return (
    <div className="App">
        <div className="content">
            <SetValueCont />
            <StartMaxCont />
        </div>
    </div>
  );
}

export default App;
