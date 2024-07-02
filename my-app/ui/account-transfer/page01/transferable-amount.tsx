import style from '@/ui/account-transfer/transfer.module.css';
import { TransferModal } from '@/types/menuprops';
import CurrentTime from '@/ui/current-time';

export default function TransferableAmount({ show }: TransferModal) {
  return (
    <div className={style.overlay}>
      <div className='border-2 border-black w-[500px]'>
        <div className='bg-blue-500 text-white py-5 px-5'>
          이체가능금액/한도
        </div>
        <div className='bg-white pt-8 px-5'>
          <CurrentTime />
          <div>
            <div className='text-[12px] text-gray-600 pt-3'>
              - 지급불가 사고 등록이 되어 있는 경우 이체가 불가할 수 있습니다.
            </div>
            <div className='text-[12px] text-gray-600 py-1'>
              - 자기앞수표가 입금된 경우 자금화 처리 전까지는 이체가 불가합니다.
            </div>
          </div>
          <table className='w-full'>
            <tbody className='border-t border-gray-500'>
              <tr>
                <th className={`${style.modaltheadstyle} ${style.theadtext}`}>계좌번호</th>
                <td className='pl-5 text-[14px]'>{}</td>
              </tr>
              <tr className='border-t border-gray-300'>
                <th className={`${style.modaltheadstyle} ${style.theadtext}`}>계좌잔액</th>
                <td className='text-end pr-5 text-[14px]'>{}원</td>
              </tr>
              <tr className='border-t border-gray-300'>
                <th className={`${style.modaltheadstyle} ${style.theadtext}`}>이체가능금액</th>
                <td className='text-end pr-5 text-[14px]'>{}원</td>
              </tr>
              <tr className='border-t border-gray-300'>
                <th className={`${style.modaltheadstyle} ${style.theadtext}`}>1일 이체한도</th>
                <td className='text-end pr-5 text-[14px]'>{}원</td>
              </tr>
              <tr className='border-y border-gray-300'>
                <th className={`${style.modaltheadstyle} ${style.theadtext}`}>1회 이체한도</th>
                <td className='text-end pr-5 text-[14px]'>{}원</td>
              </tr>
              <tr className='border-b border-gray-500'>
                <th className={`${style.modaltheadstyle} ${style.theadtext}`}>1일 잔여한도</th>
                <td className='text-end pr-5 text-[14px]'>{}원</td>
              </tr>
            </tbody>
          </table>
          <div className='py-5 flex justify-center'>
            <button 
              type='button' 
              onClick={show}
              className={`${style.modalbtn} bg-gray-400 border-gray-500`}
            >닫기</button>
          </div>
        </div>
      </div>
    </div>
  )
}