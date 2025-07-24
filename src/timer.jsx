import React from "react";
import Counting from "./counting.jsx"

function Timer() {
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
                bg-[#de4b4b] text-black
                animate__rubberBand
                "
                >Year Ends</button>

                <Counting/>
        

            </div>
        </div>
    )
}

export default Timer