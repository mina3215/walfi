function InformationCircle() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="gray" className="size-12">
      <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
    </svg>
  )
}

export default function TransferNotice() {
  return(
    <div className='flex items-center justify-center py-24 pl-10'>
      <div className='items-center px-5 py-5 border border-gray-300 bg-gray-50'>
        <div className='flex items-center pb-2'>
          <InformationCircle />
          <div className='font-semibold text-[16px] pl-2'>
            이용안내
          </div>
        </div>
        <div className='pl-14'>
          <div className='text-[15px] font-semibold text-gray-600'>
            서비스 이용시간
          </div>
          <div className='text-[12px] pt-1'>
            - 평일 00:15~24:00, <span className='text-blue-500'>토요일 00:15~24:00</span>, <span className='text-red-500'>일요일/공휴일 00:15~24:00</span>
          </div>
          <div className='text-[12px] pt-1'>
            - <span className='text-red-500'>타행이체가능시간: 00:15 ~ 23:55</span>
          </div>
          <div className='text-[12px] pt-1'>
            - 서비스 이용시간 예외 적용: CMS 00:30 ~ 23:50, 가상계좌 00:30 ~ 23:30, 국세/지방세입/국고금 00:30 ~ 23:10
          </div>
        </div>
      </div>
    </div>
  )
}