import {useState} from 'react'
import '../css/Header.css'
import GifSearch from './GifSearch';

function Header() {

  const [searchTerm, setSearchTerm] = useState('');


  return (
    <div>

      <div className='header'>

        <h3 className='header-title'>Gif Creater</h3>
        <input className='header-input' value={searchTerm} onChange={(e)=> setSearchTerm(e.target.value)} type="text" placeholder='Search-Gif' />
      <button className='header-btn' onClick={() => setSearchTerm(searchTerm)}>Search</button>
      </div>
      <GifSearch searchTerm={searchTerm}/>
    </div>
  )
}

export default Header