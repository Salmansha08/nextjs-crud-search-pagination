'use client'

import React from 'react'
import { saveContact } from '@/libs/action'
import { useFormState } from 'react-dom'
import { SubmitButton } from '@/components/Button'

const CreateForm = () => {
  const [state, formAction] = useFormState(saveContact, null)
  return (
    <div>
        <form action={formAction}>
            <div className='mb-5'>
                <label htmlFor='name' className='mb-2 block text-sm font-medium text-slate-900'>Full Name</label>
                <input type="text" name="name" id="name" placeholder='Full Name' className='bg-slate-50 border border-slate-300 text-slate-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'/>
                <div id="name-error" aria-live='polite' aria-atomic='true'>
                  <p className='mt-2 text-sm text-rose-500'>{state?.error?.name}</p>
                </div>
            </div>
            <div className='mb-5'>
                <label htmlFor='phone' className='mb-2 block text-sm font-medium text-slate-900'>Phone Number</label>
                <input type="text" name="phone" id="phone" placeholder='Phone Number' className='bg-slate-50 border border-slate-300 text-slate-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'/>
                <div id="phone-error" aria-live='polite' aria-atomic='true'>
                  <p className='mt-2 text-sm text-rose-500'>{state?.error?.phone}</p>
                </div>
            </div>
            <div id="message-error" aria-live='polite' aria-atomic='true'>
              <p className='mt-2 text-sm text-rose-500'>{state?.message}</p>
            </div>
            <SubmitButton label='save' />
        </form>
    </div>
  )
}

export default CreateForm