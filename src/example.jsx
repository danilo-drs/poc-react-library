import React, { useState } from 'react';
import styles from './styles.module.css'


export const ExampleComponent = ({ cep, onAddressFound, isvisible }) => {
  const [oldCEP, setOldCEP] = useState({});
  const [address, setAddress] = useState({});
  if (cep && cep !== oldCEP) {
    setOldCEP(cep)
    fetch(`https://api.postmon.com.br/v1/cep/${cep}`)
      .then(res => res.json())
      .then(
        (result) => {
          setAddress(result);
          if (onAddressFound)
            onAddressFound(result);
        },
        (error) => {
          const ret = { logradouro: 'não encontrado' }
          setAddress(ret);
          if (onAddressFound)
            onAddressFound(ret);
        }
      )
  }
  return isvisible ? <div className={styles.test}>
    {address.logradouro || ''}
     - {address.bairro || ''}
     - {address.cidade || ''}
     - {address.estado || ''}
  </div>
     : ""
}
