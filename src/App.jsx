import { useState } from 'react'
import './App.css'

export function App() {

  const [date, setDate] = useState("00 : 00 : 00 : 00");

  var dataAtual = new Date();

  var dia = dataAtual.getDate();
  var horas = dataAtual.getHours();
  var minutos = dataAtual.getMinutes();
  var seconds = dataAtual.getSeconds();

  // setInterval(() => {
  //   setDate(dia + " : " + horas + " : " + minutos + " : " + seconds-2);
  // }, 1000);

  function showMenu() {
    const element = document.querySelector("#menu")
    element.classList.remove("noOpacity");
    element.classList.add("opacity");
  }

  function unshowMenu() {
    const menu = document.querySelector("#menu");
    menu.classList.remove("opacity");
    menu.classList.add("noOpacity");

    const element = document.querySelector("#finally");
    element.classList.remove("noOpacity");
    element.classList.add("opacity");
  }

  function closeMenu() {
    const element = document.querySelector("#finally");
    element.classList.remove("opacity");
    element.classList.add("noOpacity");
  }

  return (
    <main>
      <div className="count">
        <div className="top">
          <h1>READY TO LAUNCH IN...</h1>
          <h2>{date}</h2>
        </div>
        <p>Inscreva-se para saber mais sobre o lançamento</p>
        <button onClick={showMenu}>Inscreva-se</button>
      </div>
      <div className="rocket">
        <img src="src\assets\rocket.svg" alt="Foguete sendo lançado" />
      </div>
      <div className="subscribe" id='menu'>
        <h2>Seu melhor e-mail</h2>
        <input type="text" placeholder='seuemail@email.com'/>
        <button onClick={unshowMenu}>Enviar</button>
      </div>
      <div className="verify noOpacity" id='finally'>
        <button onClick={closeMenu}><img src="src/assets/close.svg" alt="Close button" /></button>
        <img src="src/assets/verificado.png" alt="Símbolo de verificado" />
        <p>E-mail cadastrado com sucesso!</p>
      </div>
    </main>
  )
}