import React, {useState} from 'react';
import Header from "./components/Header";
import FormAddRoommate from "./components/FormAddRoommate";
import FormAddChore from './components/FormAddChore';
import RoommateBalances from './components/RoommateBalances';
import ChoreHistory from './components/ChoreHistory';
import WeeklySummary from './components/WeeklySummary';

const App = () => {
  const [roommates, setRoommates] = useState([]);
  const [chores, setChores] = useState([]);

  return (
    <div className='w-full flex flex-col items-center py-12 font-mono bg-[#111f41] text-white h-screen'>
      <Header/>
      <div className='grid grid-cols-2 gap-4'>
        <FormAddRoommate setRoommates={setRoommates} />
        <FormAddChore roommates={roommates} setChores={setChores} />
        <RoommateBalances roommates={roommates} />
        <ChoreHistory chores={chores} />
        <WeeklySummary />
      </div>
    </div>
  )
}

export default App
