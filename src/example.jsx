import React, { useState } from 'react';
import styles from './styles.module.css'


export const ExampleComponent = ({ cep }) => {
  const [oldCEP, setOldCEP] = useState({});
  const [address, setAddress] = useState({});
  if (cep && cep !== oldCEP) {
    setOldCEP(cep)
    fetch(`https://api.postmon.com.br/v1/cep/${cep}`)
      .then(res => res.json())
      .then(
        (result) => {
          setAddress(result);
        },
        (error) => { 
          setAddress({logradouro: 'não encontrado'});
        }
      )
  }
  return <div className={styles.test}>
    {address.logradouro || ''}
     - {address.bairro || ''}
     - {address.cidade || ''}
     - {address.estado || ''}
  </div>
}
