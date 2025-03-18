import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import '../css/GifSearch.css'

function GifSearch({ searchTerm }) {
    
    const [gifs, setGifs] = useState([]);
    const [error, setError] = useState('');
    
    const API_KEY = 'Ja8gSyfPNJzFwMsUZv0Zx0fKmp9Te5wq';
  
    useEffect(() => {
        if (!searchTerm) {
            setGifs([]);
            return;
        }
        
        const fetchGif = async () => {
            try {
                const response = await axios.get('https://api.giphy.com/v1/gifs/search', {
                    params: {
                        api_key: API_KEY,
                        q: searchTerm,
                        limit: 12,
                        lang: 'tr',
                    },
                });
                setGifs(response.data.data);
            
                
            } catch (error) {
                setError('Gifler yüklenirken hata oluştu');
                console.log(error)
            }
                
        }
       

            fetchGif();
        }, [searchTerm]);
    

    return (
    <div>
            <div className='gif-results'>
                
                {error && <p>{error}</p>}


                {gifs.length > 0 ? (gifs.map((gif) => (
                    <div key={gif.id} className='gif-item'>
                        <img src={gif.images.fixed_height.url} alt={gif.title} />
                    </div>
                ))
                ) : (
                        searchTerm && <p>{searchTerm}  Bulunamadi</p>
                    
                )}
          </div>
    </div>
  )
}

export default GifSearch