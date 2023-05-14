import React, { useEffect, useState } from 'react'
import Show from './Show';

export default function Search() {

    const [ data , setData ] = useState([]);
    const [ search , setSearch] = useState("");
    

    useEffect(() => {

        fetch(`https://api.giphy.com/v1/gifs/search?api_key=GlVGYHkr3WSBnllca54iNt0yFbjz7L65&q=${search}&limit=25&offset=0&rating=g&lang=en`).then((res)=> res.json()).then((data) => {
        console.log(data.data);
        setData(data.data);
}) 
}, [search] )
    

    return (

<div className='main'>

        <div className='search'>
           
            <div className='input'>
                <img src='./img.jpeg' className='icon' alt='none'/>
   <input type='text' className='inp'  value={search} onChange={ (e) => setSearch(e.target.value) } />
            </div>
            
            <button className='btn'>Search</button>
        </div>

        <div className='show'>
            {
                data.map((e , i) => (
                    <Show key={i} url = {e.bitly_gif_url}/>
                ))
            }
        </div>

        </div>
  )
}
