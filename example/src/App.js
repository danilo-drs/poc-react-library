import React, { useState } from 'react';

import pocLib from 'poc-react-library'
import 'poc-react-library/dist/index.css'

const App = () => {
  const [cep, setCEP] = useState('');
  const [finalCEP, setFinalCEP] = useState('');
  const [address, setAddress] = useState('');
  const handleAddress = setAddress
  return <div>
    <input type="text" value={cep} onBlur={e => setFinalCEP(e.target.value)} onChange={e => setCEP(e.target.value)} isvisible={false}/>
    <pocLib.ExampleComponent cep={finalCEP} onAddressFound={handleAddress}/> 
    o retorno é {JSON.stringify(address)}
  </div>
}

export default App
