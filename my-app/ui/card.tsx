import { ProductProps } from '@/types/product-props';

export default function RecommandCard({
  name,
  baseRate,
  addRate,
  period,
  info
}: ProductProps) {
  const maxRate = (baseRate + addRate*10).toFixed(2);
  
  return (
    <div id='Recommand-Card' className='flex flex-col justify-between bg-white w-[250px] h-[250px] mx-auto rounded-bl-3xl rounded-tr-3xl font-semibold overflow-hidden'>
      <div className='flex justify-between pl-2'>
        <p>적금</p>
        <div className='bg-blue-600 text-white w-[80px] h-[30px] rounded-bl-3xl rounded-tr-3xl flex justify-center'>
          <p>WALFI</p>
        </div>
      </div>
      <div id ='product-info' className='flex flex-col items-center'>
        <p id ='name' className='text-xl mb-2'>{name.split(' ').join('')}</p>
        <p id ='rate' className='text-xl mb-2'>{baseRate}~{maxRate}%</p>
        <p id ='period' className='text-base font-thin mb-2'>({period}개월 만기)</p>
        <p id ='info' className='text-base font-thin text-center mx-5'>{info}</p>
      </div>
      <div className='flex flex-row justify-center bg-gray-100 h-[30px] '>
        <p>#WALFI #혜택</p>
      </div>
    </div>
  )
}

