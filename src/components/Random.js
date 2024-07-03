import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Spinner from './Spinner';
import useGif from '../hooks/useGif';

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;


const Random = () => {

  // const [gif, setGif] = useState('');
  // const[loading, setLoading] = useState(false);

  // async function fetchData(){
  //   setLoading(true);
  //   const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
  //   const {data} = await axios.get(url);
  //   const imageSource = data.data.images.downsized_large.url;
  //   setGif(imageSource)
  //   setLoading(false);
  // }

  // useEffect( ()=>{
  //   fetchData();
  // },[])

  const {gif, loading, fetchData} = useGif();
  function clickHandler(){
    fetchData();
  }


  return (
    <div className='flex flex-col items-center w-1/2 bg-green-400 rounded-lg border border-black gap-y-5 mt-[15px] '>
      <h1 className='mt-[25px] text-2xl uppercase underline font-bold'>A Random GIF</h1>
      
      {
        loading ? (<Spinner/>) :(<img src={gif} width="450" />)
      }
      
      <button onClick={clickHandler}
      className='w-10/12 text-lg mb-[24px] py-2 rounded-lg bg-yellow-500' >
        Generate GIF
      </button>
    </div>
  )
}

export default Random
