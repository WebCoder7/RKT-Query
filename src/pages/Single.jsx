import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'
import { useParams } from 'react-router-dom'

function Single() {
  const HTTP = import.meta.env.VITE_API
  const {id}  = useParams()


  const {data = {}} = useQuery({
    queryKey:["singleStudent"],
    queryFn:() => axios.get(`${HTTP}/students/${id}`).then(res => res.data)
  })


  return (
    <div className='p-5 w-[300px] mx-auto border-slate-500 border-[2px] rounded-lg mt-10'>
      <h2 className='text-[30px] font-bold'>Name: {data.name}</h2>
      <h3 className='text-[26px] font-medium'>Surname: {data.surname}</h3>
      <p className='text-[26px] font-medium'>Age: {data.age}</p>
    </div>
  )
}

export default Single