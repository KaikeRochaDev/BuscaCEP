import {useState} from 'react'
import {FiSearch} from 'react-icons/fi'
import './styles.css'

import api from './services/api'

function App() {

  const [input, setInput] = useState('')
  const [cep, setCep] = useState({})

  async function handleSearch(){
    if(input === ''){
      alert('Por favor, preencha o cep!')
      return
    }

    try{
      const response = await api.get(`${input}/json/`)
      setCep(response.data)
      setInput('')

    } catch{
      alert('Ops, erro ao buscar!')
      setInput('')
    }
  }

  document.addEventListener('keypress', function(e){
    if(e.key === 'Enter'){
      const btn = document.getElementById('btnSearch')

      btn.click()
    }
  })

  return (
    <div className="container">
      <h1 className="title">Busca CEP</h1>

      <div className="containerInput">
        <input type="text" placeholder="Digite seu CEP..." value={input} onChange={(e) => setInput(e.target.value)}/>

        <button id='btnSearch' className="buttonSearch" onClick={handleSearch}>
          <FiSearch size={25} color='#fff'/>
        </button>
      </div>

      {Object.keys(cep).length > 0 && (
          <main className='main'>
              <h2>CEP: {cep.cep}</h2>

              <span>
                {cep.logradouro}
              </span>

              <span>
                {cep.bairro}
              </span>
      
              <span>
                {cep.localidade} - {cep.uf}
              </span>
          </main>
      )}
    </div>
  );
}

export default App;
