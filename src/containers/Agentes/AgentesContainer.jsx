import React, { useState, useEffect } from 'react'
import { Card } from '../../components/Card/Card'
import axios from 'axios'
import './Styles.scss'

export const AgentesContainer = () => {
  const [agentes, setAgentes] = useState([])

  const API_AGENTES = 'https://valorant-api.com/v1/agents?isPlayableCharacter=true'

  useEffect(() => {
    const getAgentes = () => {
      const response = axios.get(API_AGENTES)
        .then(res => {
          setAgentes(res.data.data)
        }).catch(err => {
          console.log(err)
        })
      console.log('response: ', response)
    }
    getAgentes()
  }, [])

  return (
    <div className='agentes-container'>
      {
        agentes.map(agente => (
          <Card
            key={agente.uuid}
            agentes={agentes}
            agente={agente}
            ability1={agente.abilities[0]}
            ability2={agente.abilities[1]}
            ability3={agente.abilities[2]}
            ability4={agente.abilities[3]}

          />
        ))
      }
    </div>
  )
}
