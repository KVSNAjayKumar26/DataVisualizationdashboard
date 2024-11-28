import React from 'react'
import useFetchData from '../hooks/useFetchData'

const UsersList = () => {
    const { data, isLoading, error } = useFetchData("https://jsonplaceholder.typicode.com/users");
    
    if (isLoading) {
        return <p>Loading...</p>
    }

    if (error) {
        return <p>Error: {error}</p>
    }
  return (
    <div>
        <h1 className='text-xl font-bold mb-4'>Users List</h1>
        <ul className='list-disc pl-5'>
            {data.map((user) => (
                <li key={user.id} className='mb-2'>
                    {user.name} ({user.email})
                </li>
            ))}
        </ul>
    </div>
  );
};

export default UsersList;