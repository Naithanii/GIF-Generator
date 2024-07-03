import logo from './logo.svg';
import './App.css';
import Random from './components/Random'
import Tag from './components/Tag'

function App() {
  return (
   <div className='w-full h-full flex flex-col background items-center'>

    <h1 className='bg-white w-11/12 rounded-xl mt-[50px] mx-[40px] text-center font-bold text-4xl py-3'>Random GIFs</h1>
    <div className='flex flex-col w-full items-center gap-y-10 mt-[33px]'>
      <Random/>
      <Tag/>
    </div>

   </div>
  );
}

export default App;
