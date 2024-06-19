'use client';

import global from '@/ui/global.module.css';
import style from '@/ui/account-transfer/transfer.module.css';
import CurrentTime from '@/ui/account-transfer/page01/current-time';

export function InformationCircle() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="gray" className="size-5">
      <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
    </svg>
  )
}

export default function TransferForm() {
  return (
    <div className='py-5 pl-10'>
      <CurrentTime />
      <form>
        <table className='w-full'>
          <tbody>
            <tr className='border-t border-gray-500'>
              <th className={`${style.theadstyle} ${style.theadtext}`}>출금계좌번호</th>
              <td className='pl-5'>
                <div className='flex items-center pt-5'>
                  <select 
                    id='accounts' 
                    className={style.downdrop}
                  >
                    <option value='none'>선택하십시오.</option>
                    <option value='none'>선택하십시오.</option>
                    <option value='none'>선택하십시오.</option>
                  </select>
                  <div className='pl-3'>
                    <button type='button' className={style.formbtn}>계좌직접입력</button>
                  </div>
                </div>
                <div className='flex items-center pt-2 pb-5'>
                  <div>
                    <button type='button' className={style.formbtn}>이체가능금액</button>
                  </div>
                  <div className='pl-3'>
                    <button type='button' className={style.formbtn}>자주쓰는이체</button>
                  </div>
                </div>
              </td>
            </tr>
            <tr className='border-t border-gray-300'>
              <th className={`${style.theadstyle} ${style.theadtext}`}>이체금액</th>
              <td className='pl-5'>
                <div className='flex items-center pt-5'>
                  <input type='number' className={style.forminput}/>
                  <div className='pl-3'>
                    <button
                      type='button'
                      className='border border-gray-300 rounded-sm py-1 px-1 text-[12px] text-gray-500'
                    >계산기</button>
                  </div>
                </div>
                <div className='flex items-center pt-2 pb-5'>
                  <div>
                    <button type='button' className={style.formbtn}>전액</button>
                  </div>
                  <div className='pl-3'>
                    <button type='button' className={style.formbtn}>만원</button>
                  </div>
                  <div className='pl-3'>
                    <button type='button' className={style.formbtn}>5만원</button>
                  </div>
                  <div className='pl-3'>
                    <button type='button' className={style.formbtn}>10만원</button>
                  </div>
                  <div className='pl-3'>
                    <button type='button' className={style.formbtn}>50만원</button>
                  </div>
                  <div className='pl-3'>
                    <button type='button' className={style.formbtn}>100만원</button>
                  </div>
                  <div className='pl-3'>
                    <button type='button' className={style.formbtn}>정정</button>
                  </div>
                </div>
              </td>
            </tr>
            <tr className='border-t border-gray-300'>
              <th className={`${style.theadstyle} ${style.theadtext}`}>입금은행</th>
              <td className='pl-5'>
                <div className='flex items-center py-5'>
                  <select id='bank' className={style.downdrop}>
                    <option value='none'>선택하십시오.</option>
                  </select>
                  <div className='pl-3'>
                    <button type='button' className={style.formbtn}>입금은행선택</button>
                  </div>
                </div>
              </td>
            </tr>
            <tr className='border-y border-gray-300'>
              <th className={`${style.theadstyle} ${style.theadtext}`}>입금계좌번호</th>
              <td className='pl-5 text-left'>
                <div className='flex items-center pt-5'>
                  <input type='text' className={style.forminput}/>
                  <div className='px-3'>
                    <button type='button' className={style.formbtn}>예금주명조회</button>
                  </div>
                  <input 
                    type='text' 
                    className='border border-gray-400 rounded-sm py-1 px-2 text-[12px]'
                    placeholder='직접입력'
                  />
                </div>
                <div className='flex items-center pt-2 pb-5'>
                  <div>
                    <button type='button' className={style.formbtn}>최근입금계좌</button>
                  </div>
                  <div className='pl-3'>
                    <button type='button' className={style.formbtn}>자주사용계좌</button>
                  </div>
                  <div className='pl-3'>
                    <button type='button' className={style.formbtn}>내계좌</button>
                  </div>
                </div>
              </td>
            </tr>
            <tr className='border-b border-gray-500'>
              <th className={`${style.theadstyle} ${style.theadtext}`}>계좌비밀번호</th>
              <td className='pl-5 text-left'>
                <div className='flex items-center py-5'>
                  <input 
                      type='password' 
                      className='border border-gray-400 rounded-sm py-1 px-2 text-[12px]'
                  />
                  <div className='flex items-center pl-3'>
                    <InformationCircle />
                    <div className='pl-1 text-[12px] text-gray-600'>
                      숫자 4자리
                    </div>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <div className='py-5 flex justify-center'>
          <button type='button' className={`${global.btn} rounded-sm py-1 px-4 text-[15px] font-semibold`}>다음</button>
        </div>
      </form>
    </div>
  )
}