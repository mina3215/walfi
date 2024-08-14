'use client'
import useProduct from '@/services/product/useProductService';
import ItemInfo from './item-info';
import { ProductProps } from '@/types/product-props';

export default function ItemList() {
  const { data } = useProduct();
  const list = data?.data.data;
  console.log(list)
  return (
    <div className='flex-col'>
      {
        list && list.map((item:ProductProps) =>
          <div key={item.name}>
            <ItemInfo item={item} />
          </div>
        )
      }

    </div>
  )
}