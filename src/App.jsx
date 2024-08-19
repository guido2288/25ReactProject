import Acordian from "./components/Accordian/Acordian"
import ImageSlider from "./components/ImageSlider/ImageSlider"
import RandomColorGen from "./components/RandomColorGen/RandomColorGen"
import StarsRating from "./components/StartRating/StarsRating"

function App() {



  return (
    <main className="main-container">
      {/* <Acordian /> */}
      {/* <RandomColorGen /> */}
      {/* < StarsRating /> */}
      <ImageSlider url={"https://picsum.photos/v2/list"} limit={"10"}/>
    </main>
  )
}

export default App
