import { ProductProps } from '@/types/product-props';
import { Blue500Button, Gray400Button } from '../buttons';
import Circle from '../shape'

export default function ItemInfo({ item }: {item :ProductProps}) {
  const {name, baseRate, info, period} = item;
  return (
    <div className='grid grid-cols-6 items-center h-32 border-b-2 border-black px-10'>
      <div className='col-span-1'>
        <Circle id='item-img'/>
      </div>
      <div className='col-span-3'>
        <div id='name-rate' className='flex font-semibold text-xl'>
          <p id='item-name'>{name}  연 <span className='text-red-500'>{baseRate} </span>% ({period}개월 세전)</p>
        </div>
        <p id='item-info'>{info}</p>
      </div>
      <div className='col-span-2 flex justify-center'>
        <div id='buttons' className='flex justify-between'>
          <Blue500Button buttonLabel="가입하기" className='p-2 mr-2' />
          <Gray400Button buttonLabel="상세보기" />
        </div>
      </div>
    </div>
  )
}