const data = [{
  type:'입출금통장',
  number: '356-0911-9548-43',
  money: '560,000'
}]

export default function AccountList() {
  return (
    <div className='bg-white w-[780px] px-[50px]'>
      <p className='text-2xl border-b-2 border-black pt-6 pb-1 font-bold'>나의 출금 계좌</p>
      {
        data.map((account) =>
          <div key={account.number} className='border-b-2 flex justify-between items-end px-[10px] text-2xl'>
            <p>{account.type}<br />{account.number}</p>
            <p className='text-blue-650 font-semibold'>{account.money}</p>
          </div>
        )
      }
    </div>
  )
}