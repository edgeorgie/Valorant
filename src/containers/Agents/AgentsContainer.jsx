import React, { useState, useEffect } from 'react'
import { Card } from '../../components/Card/Card'
import axios from 'axios'
import './Styles.scss'
// import { FilterBar } from '../../components/FilterBar/FilterBar'

export const AgentsContainer = () => {
  const [agentes, setAgentes] = useState([])
  const [loading, setLoading] = useState(false)

  const API_AGENTES = 'https://valorant-api.com/v1/agents?isPlayableCharacter=true'

  useEffect(() => {
    const getAgentes = async () => {
      await axios.get(API_AGENTES)
        .then(res => {
          setAgentes(res.data.data)
        }).catch(err => {
          console.log(err)
        })
      setLoading(true)
    }
    getAgentes()
  }, [])

  return (
    <>
      {/* <FilterBar agentes={agentes} /> */}
      <div className='agentes-container'>
        {
          loading
            ? (
                agentes.map(agente => (
                  <Card
                    key={agente.uuid}
                    loading={loading}
                    agentes={agentes}
                    agente={agente}
                    ability1={agente.abilities[0]}
                    ability2={agente.abilities[1]}
                    ability3={agente.abilities[2]}
                    ability4={agente.abilities[3]}
                  />
                ))
              )
            : (
              <div className='lds-ring'><div /><div /><div /><div /></div>
              )
        }
      </div>
    </>
  )
}
