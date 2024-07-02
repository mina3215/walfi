import global from '@/ui/global.module.css';
import style from '@/ui/account-transfer/transfer.module.css';

function InformationCircle() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="gray" className="size-12">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
    </svg>
  )
}

export function Notice() {
  return (
    <div className='pt-5'>
      <div className='border-y-2 border-gray-400 py-10'>
        <div className='pl-10 flex items-center'>
          <InformationCircle />
          <div className='pl-5'>
            <div className='text-[14px] text-gray-700'>
              고객님은 간편뱅킹 이용중이십니다.
            </div>
            <div className='text-[14px] text-gray-700'>
              <span className='text-blue-500 font-semibold'>공동인증서 및 보안매체(보안카드, OTP 등) 없이</span> 거래가 진행됩니다.
            </div>
          </div>
        </div>
      </div>
      <div className='pt-10'>
        <div className='border border-gray-400 bg-blue-50 py-7 px-6'>
          <div className='text-[16px] text-blue-500 font-semibold'>
            확인해주세요!
          </div>
          <div className='text-[12px] text-gray-600 pt-2'>
            - 착오송금 예방을 위해 입금 은행과 계좌번호, 받는 분(예금주)을 다시 한 번 확인해 주세요.
          </div>
          <div className='text-[12px] text-gray-600 pt-1'>
            - 이체 실행 후에는 정정(취소)이 불가합니다.
          </div>
          <div className='text-[12px] text-gray-600 pt-1'>
            - 이체 처리 중 컴퓨터 다운 등의 오류가 발생할 경우 `이체결과조회`를 반드시 확인하시길 바랍니다.
          </div>
        </div>
      </div>
    </div>
  )
}

export function Information() {
  return(
    <div className='flex items-center justify-center pb-24'>
      <div className='items-center px-10 py-10 border border-gray-300 bg-gray-50 w-full'>
        <div className='flex items-center pb-2'>
          <InformationCircle />
          <div className='font-semibold text-[18px] pl-2'>
            이용안내
          </div>
        </div>
        <div className='pl-14'>
          <div className={style.titletext}>
            서비스 이용시간
          </div>
          <div className={`${style.subtext} font-semibold`}>
            - 평일 00:15~24:00, <span className={style.bluetext}>토요일 00:15~24:00</span>, <span className={style.redtext}>일요일/공휴일 00:15~24:00</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function TransferBtn() {
  return (
    <div className='pl-10 pt-10'>
      <Notice />
      <div className='pt-10 pb-16 flex justify-center'>
        <div className='px-4'>
          <button 
            type='button' 
            className={`${global.btn} rounded-sm py-1 px-4 text-[15px] font-semibold`}
          >즉시이체 실행</button>
        </div>
        <div className='px-4'>
          <button 
            type='button' 
            className='border border-gray-500 bg-gray-500 text-white rounded-sm py-1 px-4 text-[15px] font-semibold'
          >취소</button>
        </div>
      </div>
      <Information />
    </div>
  )
}