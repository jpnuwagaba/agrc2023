import React from 'react'

const ConferencePaymentForm = () => {
  return (
    <div className='flex flex-col gap-4'>
      <div className='font-bold text-xl text-center'>Conference & Pre-Conference fee: $80 or 300,000 UShs</div>
      {/* <div className="font-bold text-xl">Payment Options</div> */}
      <div className='flex flex-col gap-3'>
        <div className='flex flex-col gap-2'>
          <div className='grid grid-cols-2 gap-2'>
            <div className='col-span-2 bg-gray-100 inline-block p-5 rounded-md'>
              <div className="flex flex-col md:flex-row items-start gap-5">
                <img className='h-12' src="/assets/stanchart.webp" alt="" />
                <div className='uppercase'>
                  <div className='font-bold uppercase text-gray-700'>standard chartered bank</div>
                  <div className='text-sm'><span className='font-bold text-gray-700'>account name: </span>Makerere University College of Engineering, Design, Art and Technology</div>
                  <div className='text-sm'><span className='font-bold text-gray-700'>account number: </span>8705612273400</div>
                  <div className='text-sm'><span className='font-bold text-gray-700'>swift code: </span>SCBLUGKA</div>
                  <div className='text-sm'><span className='font-bold text-gray-700'>physical branch: </span>Speke Road</div>
                </div>
              </div>
            </div>
            <div className="flex flex-row items-center justify-between bg-gray-100 inline-block p-5 rounded-md h-16">
              <img className='w-10' src="/assets/airtel-money.png" alt="" />
              <div className='font-bold'>+256 706 712830</div>
            </div>
            <div className="flex flex-row items-center justify-between bg-gray-100 inline-block p-5 rounded-md h-16">
              <img className='w-10' src="/assets/mtn_momo.png" alt="" />
              <div className='font-bold'>+256 775 702 841</div>
            </div>
          </div>
        </div>
      </div>
      <div className='text-center'>
        <div className="text-gray-700">Payment can be made via Standard Chartered Bank or Mobile Money or physically at the Department of Geomatics and Land Management in the new CEDAT building, 2<sup>nd</sup> Floor, Room 3029.</div>
        <div className="text-gray-700">This payment covers the three days for the Pre-Conference Workshops and the Conference.</div>
        <div className='text-gray-700'>Payment can be made to the numbers above registered to Ms. Flavia Nazziwa</div>
      </div>
    </div>
  )
}

export default ConferencePaymentForm