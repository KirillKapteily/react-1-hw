import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

let name = "Kirill";
let alt = "Vite-logo";

let number1 = 2;
let number2 = 6;

const colors = [
  { id: "id-1", name: "Червоний" },
  { id: "id-2", name: "Синій" },
  { id: "id-3", name: "Зелений" },
];

let total = number1 + number2;

let favoriteSite = {
  site: "Taylor Swift", url: "https://www.taylorswift.com/"
}

function App() {
  return (
    <>
      {/* 1 */}
      <h1>{name}</h1>

      {/* 3 */}
      <p>Ласкаво просимо до нашого сайту!</p>
      {/* 4 */}
      <img src={viteLogo} alt={alt} />
      {/*5 */}
      <a href={favoriteSite.url}>{favoriteSite.site}</a>
      {/* 6 */}
      <p>{number1} + {number2} = {total}</p>
      {/* 7 */}
<ul>
      {colors.map(color => (<li key={color.id}>{color.name}</li>))}
</ul>
    </>
  )
}

export default App
