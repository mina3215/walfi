import global from '@/ui/global.module.css';
import style from '@/ui/account-transfer/transfer.module.css';
import CurrentTime from '@/ui/account-transfer/current-time';

export default function Result() {
  return (
    <div className='pl-10'>
      <div className='py-5 text-[14px] text-gray-700'>
        ▶ 즉시이체가 정상적으로 완료되었습니다.
      </div>
      <div className='flex justify-between'>
        <div className={style.semititle}>
          이체결과
        </div>
        <CurrentTime />
      </div>
      <div className='pt-3'>
        <table className='w-full'>
          <tbody>
            <tr className='border-t border-gray-500'>
              <th className={`${style.theadstyle} ${style.theadtext}`}>출금계좌번호</th>
              <td className='pl-5'>{}</td>
            </tr>
            <tr className='border-y border-gray-300'>
              <th className={`${style.theadstyle} ${style.theadtext}`}>보내는분</th>
              <td className='pl-5'>{}</td>
              <th className={`${style.theadstyle} ${style.theadtext} border-l`}>출금통장 표시내용</th>
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
            <tr className='border-y border-gray-300'>
              <th className={`${style.theadstyle} ${style.theadtext}`}>수수료</th>
              <td className='text-right pr-5' colSpan={3}>
                <div className='font-semibold text-[14px] text-sky-700'>
                  {}원
                </div>
              </td>
            </tr>
            <tr className='border-y border-gray-300'>
              <th className={`${style.theadstyle} ${style.theadtext}`}>이체 후 잔액</th>
              <td className='text-right pr-5' colSpan={3}>
                <div className='font-semibold text-[14px] text-gray-500'>
                  {}원
                </div>
              </td>
            </tr>
            <tr className='border-y border-gray-300'>
              <th className={`${style.theadstyle} ${style.theadtext}`}>입금계좌번호</th>
              <td className='pl-5' colSpan={3}>
                <div className='font-semibold text-[14px] text-sky-700'>
                  {}
                </div>
              </td>
            </tr>
            <tr className='border-b border-gray-500'>
              <th className={`${style.theadstyle} ${style.theadtext}`}>받는분</th>
              <td className='pl-5'>{}</td>
              <th className={`${style.theadstyle} ${style.theadtext} border-l`}>입금통장 표시내용</th>
              <td className='pl-5'>{}</td>          
            </tr>
          </tbody>
        </table>
      </div>
      <div className='pt-10 pb-16 flex justify-center'>
        <button 
          type='button' 
          className={`${global.btn} rounded-sm py-1 px-4 text-[15px] font-semibold`}
        >확인</button>
      </div>
    </div>
  )
}