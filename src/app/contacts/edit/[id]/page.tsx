import React from 'react'
import EditForm from '@/components/EditForm'
import { getContactById } from '@/libs/data'
import { notFound } from 'next/navigation'

const EditContactPage = async ({params}: {params: {id: string}}) => {
  const id = params.id
  const contact = await getContactById(id)

  if (!contact) {
    notFound()
  }
  return (
    <div className='max-w-md mx-auto mt-5'>
        <h1 className='text-2xl text-center mb-2'>Add New Contact</h1>
        <EditForm contact={contact}/>
    </div>
  )
}

export default EditContactPage