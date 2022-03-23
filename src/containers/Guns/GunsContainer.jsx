import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { CardGuns } from '../../components/CardGun/CardGun'
import { CardGunSkin } from '../../components/CardGun/CardGunSkin'
import './Styles.scss'

export const GunsContainer = () => {
  const API_GUNS = 'https://valorant-api.com/v1/weapons'
  const [guns, setGuns] = useState([])
  // const [gunsSkins, setGunsSkins] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const getGuns = async () => {
      await axios.get(API_GUNS)
        .then(res => {
          console.log(res.data.data)
          setGuns(res.data.data)
        }).catch(err => {
          console.log(err)
        })
      setLoading(true)
    }
    getGuns()
  }, [])
  return (
    <>
      <div className='guns-container'>
        {
          loading
            ? (
                guns.map(gun => {
                  return (
                    <>
                      <CardGuns
                        key={gun.uuid}
                        gun={gun}
                        stats={gun.weaponStats ? gun.weaponStats : {}}
                        shopData={gun.shopData ? gun.shopData : {}}
                      />
                      {
                        gun.skins.map(skin => {
                          return (
                            <CardGunSkin
                            key={skin.uuid}
                            gun={gun}
                            skin={skin}
                            />
                          )
                        })
                      }
                    </>
                  )
                })
              )
            : (
              <div className='lds-ring'><div /><div /><div /><div /></div>
              )
        }
      </div>
    </>
  )
}
