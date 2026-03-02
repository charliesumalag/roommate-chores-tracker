import React from 'react'

const FormAddRoommate = () => {
  return (
    <div className='border border-white px-6 py-4'>
        <h3 className='text-lg'>Add Roommate</h3>
        <form action="" className='flex gap-2'>
            <img src="" alt="" className='border border-white w-[20px]' />
            <input type="text" className='border border-white px-2 py-1 font-sans text-sm text-gray-300' placeholder='Roommate Name' />
            <button className='bg-[#183756] text-[#53d0d3] text-sm px-8 cursor-pointer hover:bg-[rgb(0,150,136)] font-mono'>Add</button>
        </form>
    </div>
  )
}

export default FormAddRoommate
