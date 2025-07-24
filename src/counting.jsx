import React, { useEffect, useState } from "react";

function Counting() {
    const [seconds, setSeconds ] = useState(0)
    const [minutes, setMinutes ] = useState(0)
    const [hours, setHours ] = useState(0)
    const [days, setDays ] = useState(0)
    const [months, setMonths ] = useState(0)
    const [years, setYears ] = useState(0)

    useEffect(
        () => {
            if (seconds>=60) {
                setMinutes(min => min+1)
                setSeconds(0)
            }
        }, [seconds]
    )
    useEffect(
        () => {
            if (minutes>=60) {
                setHours(hour => hour+1)
                setMinutes(0)
            }
        }, [minutes]
    )
    useEffect(
        () => {
            if (hours>=24) {
                setDays(day => day+1)
                setHours(0)
            }
        }, [hours]
    )
    useEffect(
        () => {
            if (days>=30) {
                setMonths(month => month+1)
                setDays(0)
            }
        }, [days]
    )
    useEffect(
        () => {
            if (months>=12) {
                setYears(year => year+1)
                setMonths(0)
            }
        }, [months]
    )
    return (
                <div
                className="flex flex-row content-around
                gap-2
                "
                >
                    <div
                    className="
                    flex flex-col items-center justify-center
                    border-2 rounded-[10px]
                     h-[105px] w-[80px] text-[22px]
                    "
                    >
                        <span>{years}</span>
                        <span>Year</span>
                    </div>
                    <div
                    className="
                    flex flex-col items-center justify-center
                    border-2 rounded-[10px]
                     h-[105px] w-[90px] text-[22px]
                    "
                    >
                        <span>{months}</span>
                        <span>Months</span>
                    </div>
                    <div
                    className="
                    flex flex-col items-center justify-center
                    border-2 rounded-[10px]
                     h-[105px] w-[80px] text-[22px]
                    "
                    >
                        <span>{days}</span>
                        <span>Days</span>
                    </div>
                    <div
                    className="
                    flex flex-col items-center justify-center
                    border-2 rounded-[10px]
                     h-[105px] w-[80px] text-[22px]
                    "
                    >
                        <span>{hours}</span>
                        <span>Hours</span>
                    </div>
                    <div
                    className="
                    flex flex-col items-center justify-center
                    border-2 rounded-[10px]
                     h-[105px] w-[80px] text-[22px]
                    "
                    >
                        <span
                        className={minutes!=0 ? "text-[#e24848]" : "" }
                        >{minutes}</span>
                        <span>min</span>
                    </div>
                    
                    <SecondsMeter seconds={seconds}/>
                    <MsMeter setSeconds={setSeconds} />
                    
                </div>
    );
}

function MsMeter({setSeconds}){
    // this component is created separtly bcz of its frquent re-rendering.
    // console.log("ms")
    const [milliSeconds, setMilliSeconds ] = useState(0)

    useEffect(
        () => { 
            const interval = setInterval(()=>{
                        setMilliSeconds(
                            prev =>{
                                if (prev>=1000) {
                                    setSeconds(sec => sec+1);
                                    return prev-1000;
                                }
                                return prev +96
                            }
                        )
                } , 80
            )
            return () => { clearInterval(interval) }
         }, []
    )
    return (
        <div
        className="
        flex flex-col items-center justify-center
        border-2 rounded-[10px]
        h-[105px] w-[80px] text-[22px]
        "
        >
            <span
            className="
            text-[#e24848]
            "
            >{milliSeconds}</span>
            <span>ms</span>
        </div>
    )
}
function SecondsMeter(props){

    return (
        <div
        className="
        flex flex-col items-center justify-center
        border-2 rounded-[10px]
        h-[105px] w-[100px] text-[22px]
        "
        >
            <span
            className="
            text-[#e24848]
            "
            >{props.seconds}</span>
            <span>Seconds</span>
        </div>
    )
}


export default Counting