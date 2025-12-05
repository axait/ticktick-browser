import React from 'react'
import { useTimerStore } from './useTimerStore';

const ResetTimer = () => {
    const {
        setSeconds,
        setMinutes,
        setHours,
        setDays,
        setMonths,
        setYears
    } = useTimerStore();

    const resetTimeFn = () => {
        // This Function Reset the time to zero.
        setSeconds(() => 0);
        setMinutes(() => 0);
        setHours(() => 0);
        setDays(() => 0);
        setMonths(() => 0);
        setYears(() => 0);
    }


    return (
        <>
            <div
                className="
                fixed bottom-5 right-5
                bg-[hsl(216,30%,20%)]
                hover:bg-[hsl(215,33%,23%)]
                p-2 rounded-full
                "
                title='hello'
                onClick={resetTimeFn}
            >
                <svg viewBox="0 0 24 24" height="24" width="24"
                >
                    <path
                        fill="#fff"
                        stroke="white"
                        strokeWidth="0.5"
                        d="M22.719 12A10.719 10.719 0 0 1 1.28 12h.838a9.916 9.916 0 1 0 1.373-5H8v1H2V2h1v4.2A10.71 10.71 0 0 1 22.719 12z">
                    </path>
                </svg>

            </div>
        </>
    )
}

export default ResetTimer