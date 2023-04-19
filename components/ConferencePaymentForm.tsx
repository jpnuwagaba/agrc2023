import React from 'react'

const ConferencePaymentForm = () => {
  return (
    <div className='flex flex-col gap-4'>
      <div className='font-bold text-xl'>Conference & Pre-Conference fee; $100 or 300,000 UShs</div>
      
      <div className="font-bold text-xl">Payment Options</div>
      <div>
        <div className="text-gray-700">Payment can be made via Mobile Money or physically at the Department of Geomatics and Land Management in the new CEDAT building, 2<sup>nd</sup> Floor, Room 3029.</div>
        <div className="text-gray-700">This payment covers the three days for the Pre-Conference Workshops and the Conference.</div>
      </div>
      <div className='flex flex-col gap-3'>
        {/* <button className='h-24 border-2 rounded-md flex items-center justify-between w-[300px] md:w-[500px] p-3'>
          <div className='text-sm'>Credit/Debit Card</div>
          <img className='w-12' src="/assets/creditcard.png" alt="" />
        </button>
        <button className='h-24 border-2 rounded-md flex items-center justify-between w-[300px] md:w-[500px] p-3'>
          <div className='text-sm'>PayPal</div>
          <img className='w-12' src="/assets/paypal.png" alt="" />
        </button> */}
        {/* <button className='h-24 border-2 rounded-md flex items-center justify-between w-[300px] md:w-[500px] p-3'>
          <div className='text-sm'>MTN MoMo</div>
          <img className='w-12' src="/assets/mtn_momo.png" alt="" />
        </button>
        <button className='h-24 border-2 rounded-md flex items-center justify-between w-[300px] md:w-[500px] p-3'>
          <div className='text-sm'>Airtel Money</div>
          <img className='w-12' src="/assets/airtel-money.png" alt="" />
        </button> */}
        <div className='flex flex-col gap-2'>
          <div className="font-bold mb-2">Mobile Money Options</div>
          <div>Payment can be made to the numbers below registered to Ms. Flavia Nazziwa</div>
          <div className="flex flex-row items-center justify-between bg-gray-100 inline-block p-3 rounded-md w-60 h-16">
            <img className='w-8' src="/assets/airtel-money.png" alt="" />
            <div className='font-bold'>+256 700 670395</div>
          </div>
          <div className="flex flex-row items-center justify-between bg-gray-100 inline-block p-3 rounded-md w-60 h-16">
            <img className='w-8' src="/assets/mtn_momo.png" alt="" />
            <div className='font-bold'>+256 781 147096</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ConferencePaymentForm