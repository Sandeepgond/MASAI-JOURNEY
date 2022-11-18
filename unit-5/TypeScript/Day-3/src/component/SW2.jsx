import { useStopWatch } from "../hooks/useStopWatch"
export const SW2=()=>{
    const {time ,start,pause,reset}=useStopWatch(0)

    return (
        <div>
            <h1>StopWatch: {time}</h1>
            <div>
                <button onClick={start}>Start</button>
                <button onClick={pause}>Pause</button>
                <button onClick={reset}>Reset</button>
            </div>
        </div>
    )
}