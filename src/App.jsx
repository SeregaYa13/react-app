import CountdownTimer from "./CountdownTimer";
import ImageGallery from "./ImageGallery";
import ImageSlider from "./ImageSlider";
import PomodoroTimer from "./PomodoroTimer";
import SimpleTimer from "./SimpleTimer";
import TextAreaWithLimit from "./TextAreaWithLimit";
function App() {
  return (
    <div>
      <ImageGallery />
      <PomodoroTimer />
      <SimpleTimer />
      <TextAreaWithLimit />
      <CountdownTimer />
      <ImageSlider />
    </div>
  );
}

export default App;
