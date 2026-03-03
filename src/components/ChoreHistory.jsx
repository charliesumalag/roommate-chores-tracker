import React from 'react'

const ChoreHistory = () => {
  return (
    <div className='border border-white px-6 py-4'>
      <h3 className='text-lg pb-1'>Chore History</h3>
      <hr className='pb-2' />
      <ul className='text-gray-400 text-sm'>
          <li className='flex justify-between'>
            <div className='flex gap-2'>
                <p className='font-semibold'>Laundry</p> <span>- Alice</span>
            </div>
            <span>✔</span>
          </li>

      </ul>
    </div>
  )
}

export default ChoreHistory
