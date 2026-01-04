/** biome-ignore-all lint/a11y/noStaticElementInteractions: <explanation> */
/** biome-ignore-all lint/correctness/useExhaustiveDependencies: <explanation> */
/** biome-ignore-all lint/a11y/useKeyWithClickEvents: <explanation> */
import { useEffect, useState } from 'react'
import { useTimerStore } from './useTimerStore';
import { useDynamicConfig, useStatsigClient } from '@statsig/react-bindings';

const ResetTimer = () => {

    const { client } = useStatsigClient();
    
    const [isResetTimerEnabled, setIsResetTimerEnabled] = useState<boolean>(false)
    const config = useDynamicConfig("is_reset_timer_enabled");
    useEffect(() => {
        client.initializeAsync();
        setIsResetTimerEnabled(config.get("value", true));
        console.log(isResetTimerEnabled);
        
    },[])

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
            {isResetTimerEnabled && <div
                className="
                fixed bottom-5 right-5
                bg-[hsl(216,30%,20%)]
                opacity-60
                hover:opacity-100
                hover:bg-[hsl(215,33%,23%)]
                p-2 rounded-full
                "
                title='Reset Timer btn'
                onClick={resetTimeFn}
            >
                <svg viewBox="0 0 24 24" height="24" width="24">
                    <title>Reset Timer</title>
                    <path
                        fill="#fff"
                        stroke="white"
                        strokeWidth="0.5"
                        d="M22.719 12A10.719 10.719 0 0 1 1.28 12h.838a9.916 9.916 0 1 0 1.373-5H8v1H2V2h1v4.2A10.71 10.71 0 0 1 22.719 12z">
                    </path>
                </svg>

            </div>}
        </>
    )
}

ResetTimer.whyDidYouRender = true;
export default ResetTimer