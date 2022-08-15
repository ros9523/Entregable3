import { useEffect, useState } from 'react'
import axios from 'axios'
import reactLogo from './assets/react.svg'
import './App.css'
import useFetch from './hooks/useFetch'
import LocationInfo from './componentes/LocationInfo'
import CardResidents from './componentes/CardResidents'

function App() {

 const [location, setLocation] = useState()
 const [searchInput, setSearchInput] = useState('')
 
 useEffect(() => {
 let randomLocation;
  if(searchInput===''){
    randomLocation= Math.floor(Math.random() * (126-1) + 1)
   } else{
    randomLocation=searchInput
  }
  const URL=`https://rickandmortyapi.com/api/location/ ${randomLocation}`
  axios.get(URL)
  .then(res=>setLocation(res.data))
  .catch(err=> console.log(err))
   
 }, [searchInput])
 
  
 
  const handdleSubmit=e=>{
    e.preventDefault()
    setSearchInput(e.target.search.value)
  }

  
  return (
    <div className="App">
      <div className='Header'>
      <h1>Ricky and Morty</h1>
      <form onSubmit={handdleSubmit}>
        <input id='search' type='text'/>
        <button>Search</button>
      </form>
      </div>

      <div className='generalInfo'>
      <LocationInfo location={location}/>
      </div>
      <div className='mainInfo'>
        {
          location?.residents.map(url=>
            (<CardResidents key={url} url={url}/>))
        }
      </div>
    </div>
  )
}

export default App
