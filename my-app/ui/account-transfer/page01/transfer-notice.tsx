import style from '@/ui/account-transfer/transfer.module.css';

function InformationCircle() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
    </svg>
  )
}

export default function TransferNotice() {
  return(
    <div className='flex items-center justify-center pb-24 pl-10'>
      <div className='items-center px-10 py-10 border border-gray-300 bg-gray-50 w-full'>
        <div className='flex items-center pb-2'>
          <InformationCircle />
          <div className='font-semibold text-[16px] pl-2'>
            이용안내
          </div>
        </div>
        <div className='pl-8'>
          <div className={style.titletext}>
            서비스 이용시간
          </div>
          <div className={style.subtext}>
            - 평일 00:15~24:00, <span className={style.bluetext}>토요일 00:15~24:00</span>, <span className={style.redtext}>일요일/공휴일 00:15~24:00</span>
          </div>
          <div className={style.subtext}>
            - <span className={style.redtext}>타행이체가능시간: 00:15 ~ 23:55</span>
          </div>
          <div className={style.subtext}>
            - 서비스 이용시간 예외 적용: CMS 00:30 ~ 23:50, 가상계좌 00:30 ~ 23:30, 국세/지방세입/국고금 00:30 ~ 23:10
          </div>
          <div className={style.subtext}>
            - 적립식예금을 제외한 정기예금 및 일부 CMS이체는 휴일거래가 불가합니다.
          </div>
        </div>
        <div className='pl-8 pt-5'>
          <div className={style.titletext}>
            인터넷뱅킹 이체수수료
          </div>
          <div className={style.subtext}>
            - 당행이체(WALFI내)수수료 : 수수료 면제
          </div>
          <div className={style.subtext}>
            - 타행이체수수료 : <span className={style.bluetext}>500원/건당(1억원 초과시 1억당 500원 추가)</span>
          </div>
          <div className={style.subtext}>
            - 하나로 가족고객(그린고객이상)은 타행이체 수수료가 면제됩니다.
          </div>
          <div className={style.subtext}>
            - 기타 가입한 상품 또는 서비스의 기준에 따라 수수료가 면제됩니다.
          </div>
        </div>
        <div className='pl-8 pt-5'>
          <div className={style.titletext}>
            거래중지계좌
          </div>
          <div className={style.subtext}>
            - 거래중지계좌는 인터넷뱅킹을 통한 입출금 거래가 불가하오니 상세 내용은 영업점으로 문의하시기 바랍니다.
          </div>
        </div>
        <div className='pl-8 pt-5'>
          <div className={style.titletext}>
            타행 자기앞수표의 자금화시각
          </div>
          <div className={style.subtext}>
            - 전일 입금된 타행 자기앞수표의 경우 <span className={style.redtext}>입금일 다음 영업일 오후 12시 20분 이후</span>에 결제 처리되어 출금이 가능합니다.
          </div>
          <div className={style.subtext}>
            - 자동화기기에서 <span className={style.bluetext}>영업시간 이후에 입금</span>된 경우 <span className={style.redtext}>입금일 다음 영업일 오후 12시 20분 이후</span>에 결제 처리되어 출금이 가능합니다.
          </div>
        </div>
      </div>
    </div>
  )
}