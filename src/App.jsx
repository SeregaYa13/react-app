import CountdownTimer from "./components/CountdownTimer/CountdownTimer";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import ImageSlider from "./components/ImageSlider/ImageSlider";
import PomodoroTimer from "./components/PomodoroTimer/PomodoroTimer";
import SimpleTimer from "./components/SimpleTimer/SimpleTimer";
import TextAreaWithLimit from "./components/TextAreaWithLimit/TextAreaWithLimit";
import DragAndDropList from "./components/DragAndDropList/DragAndDropList";

function App() {
  return (
    <div>
      <ImageGallery />
      <PomodoroTimer />
      <SimpleTimer />
      <TextAreaWithLimit />
      <CountdownTimer />
      <ImageSlider />
      <DragAndDropList items={["Элемент 1", "Элемент 2", "Элемент 3", "Элемент 4"]} />

    </div>
  );
}

export default App;
