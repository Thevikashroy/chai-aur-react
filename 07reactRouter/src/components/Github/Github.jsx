import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(() => {
    //  fetch('https://api.github.com/users/Thevikashroy')
    //  .then(response => response.json())
    //  .then(data => {
    //     console.log(data);
    //     setData(data)
    //  })
    // }, [])
    
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
      <div>Github followers: {data.followers}</div>
      <div>Github following: {data.following}</div>
    <img src={data.avatar_url} alt="Git picture" width={300} />
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/Thevikashroy')
    return response.json()
}


/*
// import React from 'react'
// import { useLoaderData } from 'react-router-dom'

// function Github() {
//     const data = useLoaderData()

//     if (!data) {
//         return <div>Loading...</div>  // Show a loading state if data is not loaded yet
//     }

//     return (
//         <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
//             <div>Followers: {data.followers}</div>
//             <div>Following: {data.following}</div>
//             <img src={data.avatar_url} alt="GitHub Avatar" width={300} />
//         </div>
//     )
// }

// export default Github

// export const githubInfoLoader = async () => {
//     try {
//         const response = await fetch('https://api.github.com/users/Thevikashroy')
//         if (!response.ok) {
//             throw new Error('Network response was not ok')
//         }
//         return response.json()
//     } catch (error) {
//         console.error('Error fetching GitHub data:', error)
//         return {}
//     }
// }

*/
