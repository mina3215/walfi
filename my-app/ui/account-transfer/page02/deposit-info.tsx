import style from '@/ui/account-transfer/transfer.module.css';

export default function DepositInfo() {
  return (
    <div className='pl-10 pt-10'>
      <div className={style.semititle}>
        입금정보
      </div>
      <div className='pt-3'>
        <div className='border border-gray-500' />
        <table className='w-full'>
          <tbody>
            <tr className='border-2 border-red-500'>
              <th className={`${style.theadstyle} ${style.theadtext}`}>입금계좌번호</th>
              <td className='pl-5 font-semibold text-[14px] text-sky-700'>{} {}</td>
              <th className={`${style.theadstyle} ${style.theadtext} border-l`}>받는분</th>
              <td className='pl-5 font-semibold text-[14px] text-sky-700'>{}</td>
            </tr>
            <tr className='border-y border-t-gray-300 border-b-gray-500'>
              <th className={`${style.theadstyle} ${style.theadtext}`}>입력한 예금주 명</th>
              <td className='pl-5' colSpan={3}>
                <div className='text-[14px]'>{}</div>
              </td>            
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}