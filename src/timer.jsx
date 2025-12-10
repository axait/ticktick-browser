import React, { useEffect, useState } from "react";
import Counting from "./counting.jsx"
import RemainingTimeInYear from "./RemainingTimeInYear.js";

function Timer() {
    const [remainingTimeInYear, setRemainingTimeInYear] = useState('')
    const [remainingTimeInYearReactNode, setRemainingTimeInYearReactNode] = useState('')
    const [isVisibility, setIsVisibility] = useState(true);

    useEffect(
        () => {
            calculateRemainingTimeInYearFn()
        }, []
    )

    const calculateRemainingTimeInYearFn = () => {

        const now = new Date().getTime();

        const currentYear = new Date().getFullYear();
        const yearEnd = new Date(`${currentYear}-12-31T23:59:59`).getTime();

        let timeLeft = yearEnd - now;

        if (timeLeft < 0) timeLeft = 0; // prevent negative

        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
            (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
            (timeLeft % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor(
            (timeLeft % (1000 * 60)) / 1000
        );


        setRemainingTimeInYear(
            `⏳ Time left this year:\n\n` +
            `${days} Days\n` +
            `${hours} Hours\n` +
            `${minutes} Minutes\n` +
            `${seconds} Seconds`
        );

        setRemainingTimeInYearReactNode(
            <>
                <b>⏳ Time left this year:</b> &nbsp;
                <b className="text-yellow-500">{days}</b> &nbsp;Days &nbsp;
                <b className="text-yellow-500">{hours}</b> &nbsp;Hours &nbsp;
                <b className="text-yellow-500">{minutes}</b> &nbsp;Minutes &nbsp;
                <b className="text-yellow-500">{seconds}</b> &nbsp;Seconds &nbsp;
            </>
        );
    }


    return (
        <div
            className="min-h-screen
        flex flex-col items-center justify-center
        max-w-screen
        "
        >
            <div
                className="flex flex-col items-center justify-evenly text-white text-2xl font-bold p-6
            md:mx-auto md:mt-20 md:p-8 rounded-xl
            md:w-[768px] h-[450px]
            -translate-y-20
            max-w-screen
            mx-auto
            "
            >
                <h1
                    className="
                tracking-wide
                underline decoration-[red]-900
                "
                >Stop wasting your time. Go and learn to Revolute.
                </h1>
                <button
                    className="h-[3.5rem] w-[9rem] 
                rounded-[10px] border-2 border-[black]
                bg-[#cc4646] 
                hover:bg-[#da4d4d] 
                text-black
                animate__rubberBand
                "
                    onClick={() => { calculateRemainingTimeInYearFn(); setIsVisibility(!isVisibility) }}
                    title={remainingTimeInYear}

                >Year Ends</button>

                <Counting />

                {isVisibility && <RemainingTimeInYear text={remainingTimeInYearReactNode} setVisiblityFn={setIsVisibility} />}


            </div>
        </div>
    )
}

export default Timer