import React from 'react'

const BottomNav = () => {
  return (
    <div className="font-poppins bg-slate-100 ">
      <div className='flex justify-between my-4 mx-24 p-4 items-center'>
        <div className='w-full'>
            Picotel
        </div>
        <div className="w-full">
            <ul className='md:flex justify-around max-w-full sm:inline-block'>
              <li>Services</li>
              <li>ContactsUs</li>
              <li>Customers</li>
            </ul>
        </div>
      </div>
    </div>
  )
}

export default BottomNav
