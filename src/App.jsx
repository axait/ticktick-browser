import { StatsigProvider, useClientAsyncInit } from '@statsig/react-bindings';
import { StatsigAutoCapturePlugin } from '@statsig/web-analytics';
import { StatsigSessionReplayPlugin } from '@statsig/session-replay';

// import Background from "./background.jsx"
import ResetTimer from "./ResetTimer.js"
import TimeMultiplier from "./TimeMultiplier.jsx"
import Timer from "./timer.jsx"

function App() {
  const { client } = useClientAsyncInit(
    import.meta.env.VITE_API_STATSIG_CLIENT_KEY,
    { userID: 'a-user' },
    { plugins: [new StatsigAutoCapturePlugin(), new StatsigSessionReplayPlugin()] },
  );

  return (
    <>
      {/* <Background /> */}
      <StatsigProvider client={client} loadingComponent={<Timer />}>
        <Timer />
        <div>
          <TimeMultiplier />
          <ResetTimer />
        </div>
      </StatsigProvider>

    </>
  )
}

export default App
