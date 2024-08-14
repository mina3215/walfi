import { ProductProps } from '@/types/product-props'
import Circle from '../shape'

export default function ItemInfo({ item }: { item: ProductProps }) {
  console.log(item)
  return (
    <div className='flex items-center h-32 border-b-2 border-black'>
      <Circle id='item-img'/>
      <div id='item'>
        <p id='item-name'>{item.name}</p>
        <p id='item-info'>{item.info}</p>
      </div>
    </div>
  )
}