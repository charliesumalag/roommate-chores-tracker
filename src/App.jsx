import React from 'react';
import Header from "./components/Header";
import FormAddRoommate from "./components/FormAddRoommate";
import FormAddChore from './components/FormAddChore';

const App = () => {
  return (
    <div className='w-full flex flex-col items-center py-12 font-mono bg-[#111f41] text-white h-screen'>
      <Header/>
      <div className='grid grid-cols-2 gap-4'>
        <FormAddRoommate />
        <FormAddChore />
      </div>
    </div>
  )
}

export default App
