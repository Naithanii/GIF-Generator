import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Spinner from './Spinner';
import useGif from '../hooks/useGif';

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;


const Tag = () => {

  // const [gif, setGif] = useState('');
  // const[loading, setLoading] = useState(false);
  
  const [tag, setTag] = useState('Search Anything');

  

  // async function fetchData(){
  //   setLoading(true);
  //   const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
  //   const {data} = await axios.get(url);
  //   const imageSource = data.data.images.downsized_large.url;
  //   setGif(imageSource)
  //   setLoading(false);
  // }

  // useEffect( ()=>{
  //   fetchData();
  // },[])

  function clickHandler(){
    fetchData();
  }

  const {gif, loading, fetchData} = useGif(tag);
  function changeHandler(event){
    setTag(event.target.value)
  }


  return (
    <div className='flex flex-col items-center w-1/2 bg-blue-400 rounded-lg border border-black gap-y-5 mt-[15px] '>
      <h1 className='mt-[25px] text-2xl uppercase underline font-bold'>Random {tag} GIF</h1>
      
      {
        loading ? (<Spinner/>) :(<img src={gif} width="450" />)
      }
      
      <input
      className='w-10/12 bg-white text-center text-lg py-2 rounded-lg mb-[5px] mt-[15px]'
      onChange={changeHandler}
      value={tag}
      />

      <button onClick={clickHandler}
      className='w-10/12 text-lg mb-[24px] py-2 rounded-lg bg-yellow-500' >
        Generate GIF
      </button>
    </div>
  )
}

export default Tag
