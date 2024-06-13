function InformationCircle() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="gray" className="size-12">
      <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
    </svg>
  )
}

export default function TransferNotice() {
  return(
    <div className='flex items-center justify-center py-24 px-16'>
      <div className='items-center px-10 py-7 border border-gray-300 bg-gray-50'>
        <div className='flex items-center pb-2'>
          <InformationCircle />
          <div className='font-semibold text-gray-600 text-[16px] pl-5'>
            이용안내
          </div>
        </div>
        <div className='px-[70px]'>
          <div className='text-[15px]'>
            서비스 이용시간
          </div>
          <div className='text-[13px]'>
            - 평일 00:15~24:00, 토요일 00:15~24:00, 일요일/공휴일 00:15~24:00
          </div>
        </div>

      </div>
    </div>
  )
}