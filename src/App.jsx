import React from 'react';
import Header from "./components/Header";
import FormAddRoommate from "./components/FormAddRoommate";

const App = () => {
  return (
    <div className='w-full flex flex-col items-center py-12 font-mono bg-[#111f41] text-white h-screen'>
      <Header/>
      <div className='grid'>
        <FormAddRoommate />
      </div>
    </div>
  )
}

export default App
