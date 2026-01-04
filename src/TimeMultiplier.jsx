/** biome-ignore-all lint/a11y/noStaticElementInteractions: <explanation> */
import React from 'react'
import { useTimerStore } from './useTimerStore';


const TimeMultiplier = () => {

	const {
		setMinutes,
		hours
	} = useTimerStore();


	const DoubleOrIncreaseTheTime = () => {
		let timeToAdd = 0;

		if (hours < 2) {
			timeToAdd = 60 * 60; // double the time
			setMinutes(preMinutes => preMinutes?preMinutes * 2:preMinutes + 1); // add x2 minutes
		} else if (hours < 3) {
			setMinutes(preMinutes => preMinutes + 6); // add 10 minutes
		} else if (hours >= 3) {
			setMinutes(preMinutes => preMinutes + 1); // add 1 minutes
		}
		console.log("time to add: ", timeToAdd)

	}


	return (
		// biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
		<div
			className='
			fixed bottom-7 right-17
			cursor-pointer
			text-[hsl(0,0%,79%)]
			transition-all
			opacity-50
			hover:opacity-100
			hover:text-[hsl(240,2%,90%)]
			'
			onClick={DoubleOrIncreaseTheTime}
		>X2</div>
	)
}

export default TimeMultiplier