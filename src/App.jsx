import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [certas, setCertas] = useState(0);
  const [meio, setMeio] = useState(0);
  const [erradas, setErradas] = useState(0);

  const resultado = (3/27 * certas) + ((3/27)/2 * meio);

  const somaDelas = certas + meio + erradas;

  function limpar() {
    setCertas(0);
    setMeio(0);
    setErradas(0);
  }

  function buttons(disabled) {
    return (
      <div style={style.container}>
        <div>
          <button onClick={() => setCertas(certas - 1)} disabled={disabled}>
            -
          </button>
          <button
            style={{ width: 150, fontWeight: "bold" }}
            onClick={() => setCertas(certas)}
            disabled={true}
          >
            Certas
          </button>
          <button onClick={() => setCertas(certas + 1)} disabled={disabled}>
            +
          </button>
        </div>

        <div>
          <button onClick={() => setMeio(meio - 1)} disabled={disabled}>
            -
          </button>
          <button
            style={{ width: 150, fontWeight: "bold" }}
            onClick={() => setMeio(meio)}
            disabled={true}
          >
            Meio Certas
          </button>
          <button onClick={() => setMeio(meio + 1)} disabled={disabled}>
            +
          </button>
        </div>

        <div>
          <button onClick={() => setErradas(erradas - 1)} disabled={disabled}>
            -
          </button>
          <button
            style={{ width: 150, fontWeight: "bold" }}
            onClick={() => setErradas(erradas)}
            disabled={true}
          >
            Erradas
          </button>
          <button onClick={() => setErradas(erradas + 1)} disabled={disabled}>
            +
          </button>
        </div>
      </div>
    );
  }

  useEffect(() => {
    if (somaDelas === 27 || somaDelas < 0) {
      if (somaDelas < 0) {
        limpar();
        alert("Não pode ter menos que 0");
      } else if (somaDelas >= 27) {
        alert("Não pode ter mais que 27");
      }
    }
  }, [certas, meio, erradas]);


  return (
    <div style={style.container}>
      <h1>Correção Lista Valendo 3</h1>
      <div>
        <div style={{ fontSize: 18 }}>Total Corrigidas: {somaDelas} </div>
        {somaDelas === 27 || somaDelas < 0 ? buttons(true) : buttons(false)}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "start",
          }}
        >
          <span>Certas: {certas}</span>
          <span>Meio Certas: {meio}</span>
          <span>Erradas: {erradas}</span>
        </div>
      </div>

      <div style={{ fontSize: 20, fontWeight: "bold" }}>
        {resultado === 0
          ? " "
          : `Resultado: ${parseFloat(resultado.toFixed(2))}`}
      </div>

      <div>
        <button style={{ width: 250, marginTop: 10 }} onClick={limpar}>
          Limpar
        </button>
      </div>
    </div>
  );
}

const style = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "30vh",
    padding: "0 20px",
    fojtSize: "1.5rem",
  },
};
export default App;
