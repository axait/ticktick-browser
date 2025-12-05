import { create } from "zustand";
import { persist } from "zustand/middleware";

interface TimerState {
  seconds: number;
  minutes: number;
  hours: number;
  days: number;
  months: number;
  years: number;

  setSeconds: (fn: (v: number) => number) => void;
  setMinutes: (fn: (v: number) => number) => void;
  setHours: (fn: (v: number) => number) => void;
  setDays: (fn: (v: number) => number) => void;
  setMonths: (fn: (v: number) => number) => void;
  setYears: (fn: (v: number) => number) => void;
}

export const useTimerStore = create<TimerState>()(
  persist(
    (set) => ({
      seconds: 0,
      minutes: 0,
      hours: 0,
      days: 0,
      months: 0,
      years: 0,

      setSeconds: (fn) => set((s) => ({ seconds: fn(s.seconds) })),
      setMinutes: (fn) => set((s) => ({ minutes: fn(s.minutes) })),
      setHours: (fn) => set((s) => ({ hours: fn(s.hours) })),
      setDays: (fn) => set((s) => ({ days: fn(s.days) })),
      setMonths: (fn) => set((s) => ({ months: fn(s.months) })),
      setYears: (fn) => set((s) => ({ years: fn(s.years) })),
    }),
    {
      name: "timer-storage", // localStorage key
    }
  )
);
