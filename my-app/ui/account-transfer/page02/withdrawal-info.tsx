import style from '@/ui/account-transfer/transfer.module.css';

export default function WithdrawalInfo() {
  return (
    <div className='pl-10 pt-10'>
      <div className={style.semititle}>
        출금정보
      </div>
      <div className='pt-3'>
        <table className='w-full'>
          <tbody>
            <tr className='border-t border-gray-500'>
              <th className={`${style.theadstyle} ${style.theadtext}`}>출금계좌번호</th>
              <td className='pl-5'>{}</td>
              <th className={`${style.theadstyle} ${style.theadtext} border-l`}>보내는분</th>
              <td className='pl-5'>{}</td>
            </tr>
            <tr className='border-y border-gray-300'>
              <th className={`${style.theadstyle} ${style.theadtext}`}>이체금액</th>
              <td className='text-right pr-5' colSpan={3}>
                <div className='font-semibold text-[14px] text-sky-700'>
                  {}원
                </div>
              </td>
            </tr>
            <tr className='border-b border-gray-500'>
              <th className={`${style.theadstyle} ${style.theadtext}`}>수수료</th>
              <td className='text-right pr-5' colSpan={3}>
                <div className='font-semibold text-[14px] text-sky-700'>
                  {}원
                </div>
              </td>            
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}