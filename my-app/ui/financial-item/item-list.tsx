'use client';

import {useProduct} from '@/services/product/useProductService';
import { ProductProps } from '@/types/product-props';
import ItemInfo from './item-info';

export default function ItemList() {
  const { data } = useProduct();
  const list = data?.data.data;
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