import React from 'react'

const Ladder = props => {
  // const { entries } = props.ladderData.data

  const entries = props.ladderData.data.entries
  console.log(entries)

  // let test = props.ladderData.map(entry => entry)

  return (
    <>
      <table style={{ width: '100%' }}>
        <thead>
          <tr>
            <th>Rank</th>
            <th>Rating</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {entries.map((item, index) => (
            <tr key={index}>
              <td key={index + 1}>{item.rank}</td>
              <td key={index + 2}>{item.rating}</td>
              <td key={index + 3}>{item.character.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default Ladder
