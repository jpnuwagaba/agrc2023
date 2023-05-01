import React from 'react'
import {FiAlertTriangle} from 'react-icons/fi'

const StatusOfSubmitAbstractsPage = () => {
  return (
    <div className='bg-red-500 p-5 rounded-md flex flex-col items-start md:flex-row md:items-center gap-3 w-[300px] md:w-max'>
      <FiAlertTriangle  size={'1.5rem'} color='white'/>
      <div className='text-sm font-bold text-white'>Submission of Abstracts is not yet enabled. Be patient</div>
    </div>
  )
}

export default StatusOfSubmitAbstractsPage