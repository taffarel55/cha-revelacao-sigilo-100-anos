import "./App.css";
import unlock from "./assets/unlocked.png";
import { useCountdown } from "./useCountDown";
import Clock from "./Clock";
import ClipboardCopy from "./ClipboardCopy";

const countDownDate = "01/01/2023";

function App() {
  const data = useCountdown(countDownDate);
  return (
    <div className="App">
      <img className="logo" src={unlock} />
      <h1>Chá de revelação sigilo de 100 anos</h1>
      <h2>
        <Clock countDownDate={countDownDate} />
      </h2>
      <p>Salve no seu calendário!</p>
      <div>Se preferir dados no formato JSON</div>
      <ClipboardCopy copyText={JSON.stringify(data)} />
      <p className="read-the-docs">Maurício Taffarel 🄯</p>
    </div>
  );
}

export default App;
