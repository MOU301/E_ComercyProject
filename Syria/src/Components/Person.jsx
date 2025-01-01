import React from 'react'

const Person = ({person}) => {
  return (
    <>
      <tbody>
            <tr>
            <th >{person.id}</th>
            <td>{person.name}</td>
            <td>{person.country}</td>
        
            </tr>
  </tbody>
    </>
  )
}

export default Person
