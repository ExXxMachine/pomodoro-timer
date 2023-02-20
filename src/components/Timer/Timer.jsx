import classes from "./Timer.module.css"
import {useEffect, useState} from "react";
import {getPadTime} from "../../helpers/getPadTime";


function Timer(){
    const [timeLeft, setTimeLeft] = useState(1500);
    const [isCounting, setIsCounting] = useState(false);
    const minutes = getPadTime(Math.floor(timeLeft / 60));
    const seconds = getPadTime(Math.floor(timeLeft - minutes * 60));
    useEffect(() => {
        const interval = setInterval(() => {
            isCounting &&
            setTimeLeft((timeLeft) => timeLeft >= 1 ? timeLeft - 1 : 0)
        },1000)
        return () => {
            clearInterval(interval);
        }
    }, [isCounting])
    const handleStart = () => {
        setIsCounting(true);
    };
    const handleStop = () => {
        setIsCounting(false);
    };
    const handleReset = () => {
        setIsCounting(false);
        setTimeLeft(1500);
    }
    return(
        <div className={classes.timer}>
            <div className={classes.timer__block}>
                <div className={classes.input__block}>
                    <input className={classes.raz} readOnly={true} id={"id2"} type={"number"} placeholder={"00"} maxLength="2" value={minutes}/>
                    <h2>Minutes</h2>
                </div>
                <h3>:</h3>
                <div className={classes.input__block}>
                    <input className={classes.raz} readOnly={true} id={"id3"} type={"number"} placeholder={"00"} maxLength="2" value={seconds}/>
                    <h2>Seconds</h2>
                </div>
            </div>
            <div className={classes.button__block}>
                <button className={classes.green__button} onClick={handleStart}>Start</button>
                <button className={classes.space__button} onClick={handleStop}>Stop</button>
                <button className={classes.red__button} onClick={handleReset}>Reset</button>
            </div>
        </div>
    );
}
export default Timer;