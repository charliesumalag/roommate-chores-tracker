import React, {useState} from 'react';

const FormAddRoommate = ({setRoommates}) => {
  const [image,setImage] = useState('https://i.pravatar.cc/48?u=499476');
  const [roommateName, setRoommateName] = useState('');




  function handleSubmitAddRoommate(e) {
    e.preventDefault();

    if (!roommateName) return;

    const id = crypto.randomUUID();

    const newRoommate = {
      id,
      roommateName: roommateName,
      image: `${image}?u=${id}`,
      balance: 0,
    }
    setRoommates((prev) => [...prev, newRoommate]);

  }

  return (
    <div className='border border-white px-6 w-[350px] py-4'>
        <h3 className='text-lg pb-2'>Add Roommate</h3>
        <form action="" className='flex gap-4 flex-col' onSubmit={handleSubmitAddRoommate}>
            <input type="text" onChange={e => setImage(e.target.value)} value={image} alt="" className='border border-white text-sm font-sans p-1 text-gray-400'  />
            <input type="text" onChange={e => setRoommateName(e.target.value)} value={roommateName} className='border border-white text-gray-400 p-1 font-sans text-sm' placeholder='Roommate Name' />
            <button className='bg-[#183756] text-[#53d0d3] text-sm px-8 py-1 cursor-pointer hover:bg-[rgb(0,150,136)] font-mono'>Add</button>
        </form>
    </div>
  )
}

export default FormAddRoommate
