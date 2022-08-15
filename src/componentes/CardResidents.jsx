import React from 'react'
import useFetch from '../hooks/useFetch'

const CardResidents = ({url}) => {

  const resident=  useFetch(url);


  return (
    <article  className='mainInfo_article'>
        <header>
            <img className='image_format' src={resident?.image} alt={`image of ${resident?.name}`}/>
            
            <span><i class='bx bxs-circle'></i>{resident?.status}</span>
        </header>
         <div >
            <h3>{resident?.name}</h3>
            <ul>
                <li>
                    <span> species:  </span> {resident?.species}
                </li>

                <li>
                    <span> origin:  </span> {resident?.origin.name} 
                </li>

                <li>
                    <span> Episodes where appear:</span>{resident?.episode.length}
                </li>
            </ul>
        </div>
    </article>
  )
}

export default CardResidents