import React, { useEffect, useState } from "react";

const RemainingTimeInYear = ({ text, setVisiblityFn }: { text: string; setVisiblityFn: (v: boolean) => void }) => {
    const [visibilityState, setVisibilityState] = useState(true);

    useEffect(() => {
        if (!visibilityState) return;

        const timer = setTimeout(() => {
            setVisibilityState(false);
            setVisiblityFn(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, [visibilityState]);

    return (
        <>
            <div
                className={`
                absolute bottom-[-10px] left-[13vw]
                bg-[#00000088] 
                text-[16px] font-light
                text-white
                rounded-sm shadow-lg
                px-4 py-2 
                transition-opacity duration-200
                ${visibilityState ?
                        "opacity-100 display-block" : "opacity-0 display-none pointer-events-none"}
                `}
            >
                {text}
            </div>
        </>
    );
};

export default RemainingTimeInYear;
