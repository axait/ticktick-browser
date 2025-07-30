import React from "react"
import Background from "./background.jsx"
import Timer from "./timer.jsx"

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
        {/* <Background /> */}
        <Timer />
    </>
  )
}


React.memo(App)

export default App
