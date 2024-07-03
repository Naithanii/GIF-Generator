  import logo from './logo.svg';
  import './App.css';
  import Random from './components/Random'
  import Tag from './components/Tag'
  import BgAnimation from './BgAnimation/BgAnimation';


  function App() {
    return (
    <div className='w-full h-full  flex flex-col items-center'>
    <BgAnimation/>


      <h1 className='bg-[#070f4e]  text-white w-11/12 rounded-xl mt-[20px] mx-[40px] text-center font-bold text-4xl py-3'>Random GIFs</h1>
      <div className='flex flex-col w-full items-center gap-y-10 mt-[33px]'>
        <Random/>
        <Tag/>


      

        
      </div>

    </div>
    );
  }

  export default App;
