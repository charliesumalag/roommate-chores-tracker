import React from 'react'

const WeeklySummary = () => {
  return (
    <div className='border border-white px-6 py-4 col-span-2'>
        <h3 className='text-lg pb-1'>Weekly Summary</h3>
        <hr className='pb-2' />
        <p className='text-gray-400'>Total Chores Done: 8</p>
        <p className='text-gray-400'>Balance Overview: Alice: +2 | Bob -1 | Charlie: -1</p>
    </div>
  )
}

export default WeeklySummary
