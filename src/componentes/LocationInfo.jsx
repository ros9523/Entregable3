import React from 'react'

const LocationInfo = ({location}) => {
  
  return (
  <article >
    <ul className='generalInfo_Elements'>
        <li><span>Name:</span><br></br>{location?.name}</li>
        <li><span>Type:</span><br></br>{location?.type}</li>
        <li><span>Dimension:</span> <br></br>{location?.dimension}</li>
        <li><span>Population:</span><br></br>{location?.residents.length} </li>
    </ul>
  </article>
  )
}

export default LocationInfo