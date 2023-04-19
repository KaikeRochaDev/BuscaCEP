import {useState} from 'react'
import {FiSearch} from 'react-icons/fi'
import './styles.css'

function App() {

  const [input, setInput] = useState('')

  function handleSearch(){
    alert('teste')
  }

  return (
    <div className="container">
      <h1 className="title">Busca CEP</h1>

      <div className="containerInput">
        <input type="text" placeholder="Digite seu CEP..." value={input} onChange={(e) => setInput(e.target.value)}/>

        <button className="buttonSearch" onClick={handleSearch}>
          <FiSearch size={25} color='#fff'/>
        </button>
      </div>

      <main className='main'>
        <h2>CEP: 709022422</h2>

        <span>
          Rua Teste
        </span>

        <span>
          Complemento: Algum
        </span>

        <span>
          Bairro
        </span>

        <span>
          Seropédica - RJ
        </span>
      </main>
    </div>
  );
}

export default App;
