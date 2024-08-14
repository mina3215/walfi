import useAccount from '@/services/account/useAccountService';
import AccountListInfo from './account-info';
import Account from '@/types/account-props';

// const data = [{
//   type:'입출금통장',
//   number: '356-0911-9548-43',
//   money: '560,000'
// }]

export default function AccountList() {
  const { data } = useAccount('KRW');
  const accounts = data?.data.data.accountDtoList;
  return (
    <div className='bg-white w-[780px] h-[330px] px-[50px] overflow-scroll'>
      <p className='text-2xl border-b-2 border-black pt-6 pb-1 font-bold'>나의 출금 계좌</p>
      {
        accounts&&accounts.map((account:Account) => (
          <div key={account.계좌번호}>
            <AccountListInfo account={account} />
          </div>
        ))
      }
    </div>
  )
}