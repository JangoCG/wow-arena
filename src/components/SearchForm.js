import React, { useState } from 'react'

const SearchForm = props => {
  const [name, setName] = useState('')
  const [server, setServer] = useState('')
  const [region, setRegion] = useState('')

  const handleChange = e => {
    console.log(e.target.id)
    switch (e.target.id) {
      case 'name':
        setName(e.target.value)
        break
      case 'server':
        setServer(e.target.value)
        break
      case 'region':
        setRegion(e.target.value)
        break
    }
  }
  const handleSubmit = e => {
    console.log(props)
    e.preventDefault()
    console.log('submit geht')
    console.log(server, name, region)
    props.parentFunction(server, name, region)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='Name'
        id='name'
        value={name}
        onChange={handleChange}
      />
      <input
        type='text'
        placeholder='Server'
        id='server'
        value={server}
        onChange={handleChange}
      />
      <input
        type='text'
        placeholder='Region'
        id='region'
        value={region}
        onChange={handleChange}
      />
      <button type='submit'>Search</button>
    </form>
  )
}

export default SearchForm
