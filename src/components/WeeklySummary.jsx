import React from 'react'

const WeeklySummary = ({choresDone,roommates}) => {
  return (
    <div className='border border-white px-6 py-4 col-span-2'>
        <h3 className='text-lg pb-1'>Weekly Summary</h3>
        <hr className='pb-2' />
        <p className='text-gray-400'>Total Chores Done: {choresDone}</p>
        <p className='text-gray-400'>Balance Overview :
          {roommates.map((roommate) => <span>{`${roommate.roommateName} = ${roommate.balance} `}{choresDone > 1 ? ' ' : ' | '} </span> )}

        </p>
    </div>
  )
}

export default WeeklySummary
