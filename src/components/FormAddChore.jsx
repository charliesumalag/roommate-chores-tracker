import React, { useState } from 'react'

const FormAddChore = ({roommates,setChores}) => {

    const [choreName, setChoreName] = useState('');
    const [selectedRoommate, setSelectedRoommate] = useState('');


    function handleAddChores(chore) {
        setChores((prev) => [...prev, chore]);
    }

    function handleAddChoreSubmit(e) {
        e.preventDefault();
        const newChores = {
            id: Date.now(),
            choreName,
            completedBy: selectedRoommate,
        }
        handleAddChores(newChores);
    }

  return (
    <div className='border border-white px-6 w-[350px] flex flex-col h-full py-4'>
        <h3 className='text-lg pb-2'>Add Chore</h3>
        <form onSubmit={handleAddChoreSubmit} className='flex flex-col flex-1 gap-2'>
            <input type="text" className='border border-white text-gray-400 p-1 font-sans text-sm' placeholder='Chore' onChange={(e) => setChoreName(e.target.value) }/>
            <select name="" id="" className='border border-white text-gray-400 p-1 font-sans text-sm' onChange={(e) => setSelectedRoommate(e.target.value)}>
                <option value="" disabled>Select Roommate</option>
                {roommates.map((roommate, index) => <option key={index} className='text-black' value={roommate.roommateName}>{roommate.roommateName}</option>)}
                {/* <option value="">Hello</option> */}
            </select>
            <button className='bg-[#183756] text-[#53d0d3] text-sm px-8 py-1 cursor-pointer hover:bg-[rgb(0,150,136)] mt-auto font-mono'>Add Chore</button>
        </form>
    </div>
  )
}

export default FormAddChore
