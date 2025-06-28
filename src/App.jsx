import "./App.css";
import unlock from "./assets/unlocked.png";
import { useCountdown } from "./useCountDown";
import Clock from "./Clock";
import ClipboardCopy from "./ClipboardCopy";

// Importações adicionadas
import { useState, useEffect } from "react";
import Confetti from "react-confetti";

const countDownDate = "06/28/2025";

function App() {
  const data = useCountdown(countDownDate);
  
  // 1. Estado para controlar se o countdown terminou
  const [isFinished, setIsFinished] = useState(false);

  // 2. useEffect para verificar os dados do countdown
  useEffect(() => {
    // Verifica se todos os valores (mês, dia, hora, etc.) são 0
    const allValuesAreZero = Object.values(data).every(
      (value) => value === 0
    );

    if (allValuesAreZero) {
      setIsFinished(true);
    }
  }, [data]); // Este hook será executado sempre que 'data' mudar

  return (
    <div className="App">
      {/* 3. Renderiza o confete se a contagem terminou */}
      {isFinished && <Confetti />}

      <img className="logo" src={unlock} />
      <h1>Fim do PEE</h1>
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
