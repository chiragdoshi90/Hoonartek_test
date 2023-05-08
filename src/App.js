import Exam1 from "./Exam1";
import Exam3 from "./Exam3";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <div>Exam 1</div>
      <Exam1 />

      <div className="exam3">Exam 3</div>
      <Exam3 />
    </div>
  );
}
