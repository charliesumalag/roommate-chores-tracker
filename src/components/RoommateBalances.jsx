import React from 'react'

const RoommateBalances = ({roommates}) => {
// console.log(roommates.roommateName  );

  return (
    <div className='border border-white px-6 py-4'>
      <h3 className='text-lg pb-1'>Roommate Balances</h3>
      <hr className='pb-2' />
      <ul className='text-gray-400 text-sm flex flex-col gap-2'>
        {roommates.map((roomate) =>
          <li key={roomate.id} className='flex justify-between'>
            <div className='flex items-center gap-2'>
              <img src={roomate.image} alt="" className='rounded-[3px] w-8' />
              <p>{roomate.roommateName}</p>
            </div>
            <div>
              <p className={roomate.balance >= 0 ? 'text-green-300' : 'text-red-400' }>Balance: {' '}
                {
                  roomate.balance > 0 ? '+' :  ''
                }
              {roomate.balance}</p>
            </div>
          </li>)}
      </ul>
    </div>
  )
}

export default RoommateBalances
