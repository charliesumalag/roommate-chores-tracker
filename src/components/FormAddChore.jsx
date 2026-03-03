import React from 'react'

const FormAddChore = () => {
    const friendsStarter = ['charlie', 'charles', 'ange'];

    function handleAddChoreSubmit(e) {
        e.preventDefault();
        console.log('add chore submitted');

    }

  return (
    <div className='border border-white px-6 w-[350px] flex flex-col h-full py-4'>
        <h3 className='text-lg pb-2'>Add Chore</h3>
        <form onSubmit={handleAddChoreSubmit} className='flex flex-col flex-1 gap-2'>
            <input type="text" className='border border-white text-gray-400 p-1 font-sans text-sm' placeholder='Chore' />
            <select name="" id="" className='border border-white text-gray-400 p-1 font-sans '>
                {friendsStarter.map((friend) => <option className='text-black' value={friend.name}>{friend}</option>)}
                {/* <option value="">Hello</option> */}
            </select>
            <button className='bg-[#183756] text-[#53d0d3] text-sm px-8 py-1 cursor-pointer hover:bg-[rgb(0,150,136)] mt-auto font-mono'>Add Chore</button>
        </form>
    </div>
  )
}

export default FormAddChore
