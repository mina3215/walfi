import { TransferHeaderProps } from '@/types/menuprops';
import IndexBox from '@/ui/account-transfer/index-box';

export default function TransferHeader({number, title}: TransferHeaderProps) {
  return (
    <div className='pl-10'>
      <div className='flex'>
        <div className='py-4 px-5 border rounded-l-md border-white bg-blue-500 text-white font-semibold text-[20px]'>
          {number}
        </div>
        <div className='py-4 px-5 w-full border border-white bg-gray-100 font-semibold text-[18px]'>
          {title}
        </div>
        <IndexBox activeIndex={number}/>
      </div>
    </div>
  )
}