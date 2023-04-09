import React from 'react'

const ConferencePaymentForm = () => {
  return (
    <div className='flex flex-col'>
      <div className='font-bold text-xl mb-3'>Add Payment option</div>
      <div className='flex flex-col gap-3'>
        <button className='h-24 border-2 rounded-md flex items-center justify-between w-[300px] md:w-[500px] p-3'>
          <div className='text-sm'>Credit/Debit Card</div>
          <img className='w-12' src="/assets/creditcard.png" alt="" />
        </button>
        <button className='h-24 border-2 rounded-md flex items-center justify-between w-[300px] md:w-[500px] p-3'>
          <div className='text-sm'>PayPal</div>
          <img className='w-12' src="/assets/paypal.png" alt="" />
        </button>
        <button className='h-24 border-2 rounded-md flex items-center justify-between w-[300px] md:w-[500px] p-3'>
          <div className='text-sm'>MTN MoMo</div>
          <img className='w-12' src="/assets/mtn_momo.png" alt="" />
        </button>
        <button className='h-24 border-2 rounded-md flex items-center justify-between w-[300px] md:w-[500px] p-3'>
          <div className='text-sm'>Airtel Money</div>
          <img className='w-12' src="/assets/airtel-money.png" alt="" />
        </button>
      </div>
    </div>
  )
}

export default ConferencePaymentForm