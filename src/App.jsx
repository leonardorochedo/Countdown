import './App.css'

export function App() {
  var dataAtual = new Date();
  var dia = dataAtual.getDate();
  var horas = dataAtual.getHours();
  var minutos = dataAtual.getMinutes();
  var seconds = dataAtual.getSeconds();
  let date = "0" + dia + " : " + horas + " : " + minutos + " : " + seconds;

  return (
    <main>
      <div className="count">
        <div className="top">
          <h1>READY TO LAUNCH IN...</h1>
          <h2>{date}</h2>
        </div>
        <p>Inscreva-se para saber mais sobre o lançamento</p>
        <button>Inscreva-se</button>
      </div>
      <div className="rocket">
        <img src="src\assets\rocket.svg" alt="Foguete sendo lançado" />
      </div>
    </main>
  )
}