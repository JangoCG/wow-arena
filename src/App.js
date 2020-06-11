import React, { useEffect, useState } from 'react'
import './App.css'
import Axios from 'axios'
import SearchForm from './components/SearchForm'
import Sibbling from './components/Sibbling'
import Ladder from './components/Ladder'

const clientId = process.env.REACT_APP_CLIENT_ID
const clientSecret = process.env.REACT_APP_CLIENT_SECRET
const profileURL =
  'https://eu.api.blizzard.com/profile/wow/character/stormscale/locklife?namespace=profile-eu&locale=en_US&access_token=US1aBYNdKc1q72uScheJ0mRqpo4ulHtTp2'
const tokenURL = 'https://us.battle.net/oauth/token'
// const axios = Axios.create({ baseURL: 'https://us.battle.net/oauth/token' })

const axios = Axios.create({
  baseURL: 'https://eu.api.blizzard.com/'
})

const config = {
  params: {
    grant_type: 'client_credentials'
  },
  auth: {
    username: clientId,
    password: clientSecret
  }
}

function getAccessToken () {
  return Axios.post(tokenURL, null, config)
}

function App () {
  const [childData, setChildData] = useState({})
  const [ladder, setLadder] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchMyAPI () {
      try {
        const res = await axios.get(
          'data/wow/pvp-season/29/pvp-leaderboard/3v3?namespace=dynamic-eu&locale=en_US&access_token=US3riE3OdFUi1t4jIJmC35WFLtWGeU7Nzw'
        )
        setLadder(res)
        setLoading(false)
      } catch (error) {
        console.log(error)
      }
    }
    fetchMyAPI()
  }, [])

  async function getProfile (server, name, region) {
    const res = await getAccessToken()
    const { access_token } = res.data

    const profile = await axios.get(
      `profile/wow/character/${server}/${name}?namespace=profile-${region}&locale=en_US&access_token=${access_token}`
    )
    return profile.data.character
  }

  return (
    <>
      <SearchForm parentFunction={getProfile} />
      <Sibbling dataFromSibbling={childData} />
      {/* {!loading ? console.log(ladder.data.entries) : null} */}
      {!loading ? <Ladder ladderData={ladder} /> : null}
    </>
  )
}

export default App
