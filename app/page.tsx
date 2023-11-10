import { SproutPic } from "./components/sproutPic"
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24 bg-blue-light">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono lg:flex">
        <p className="text-2xl text-green-dark">
          Sprout Pomodoro Timer
        </p>

        <div className="">
        Start Work
        </div>
        <div className="">
        Start Break
        </div>
        <div className="">
        New Sprout
        </div>
      </div>
      <div className="pt-20 text-6xl font-sans tracking-widest text-blue-dark">
        Big Timer Countdown
      </div>
      <div className="pt-10">
        <SproutPic stage={6} />
      </div>
    </main>
  )
}
