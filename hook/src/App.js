import ColorFeature from "./features/ColorFeature";
import PostFeature from "./features/PostFeature";
import TodoFeature from "./features/TodoFeature";
import ClockFeature from "./features/ClockFeature";
import ColorHook from "./features/ColorHook";

function App() {
  return (
    <div>
      <ColorFeature />
      <TodoFeature />
      <PostFeature />
      <ClockFeature />
      <ColorHook />
    </div>
  );
}

export default App;
