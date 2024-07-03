import Link from 'next/link'

export default function AccountBox() {
  return (
    <div id='left' className='text-white bg-blue-600 w-[300px] h-[350px] rounded-bl-3xl rounded-tr-3xl overflow-hidden font-semibold'>
      <div className='h-[300px] items-center px-[30px] py-[80px]'>
        <p>나의 WALFI <br />출금 계좌에</p>
        <div className='mt-4'>
          <p className='inline-block text-3xl'>560,000</p>
          <p className='inline-block'>원</p>
          <p className='block'>있습니다.</p>
        </div>
      </div>
      <div id='buttons' className='flex bg-blue-500 h-[50px]'>
        <Link
        href='/'
        className='flex w-[150px] justify-center items-center border-r-[1px]'>
          <p>즉시이체</p>
        </Link>
        <Link
        href='/'
        className='flex w-[150px] justify-center items-center'>
          <p>거래내역</p>
        </Link>
      </div>
    </div>
  )
}