import React, { useState } from 'react';

import pocLib from 'poc-react-library'
import 'poc-react-library/dist/index.css'

const App = () => {
  const [cep, setCEP] = useState('');
  const [finalCEP, setFinalCEP] = useState('');
  
  return <div>
    <input type="text" value={cep} onBlur={e => setFinalCEP(e.target.value)} onChange={e => setCEP(e.target.value)}/>
    <pocLib.ExampleComponent cep={finalCEP} /> 
  </div>
}

export default App
