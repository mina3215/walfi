import useProduct from '@/services/product/useProductService';
import { ProductProps } from '@/types/product-props';
import RecommandCard from '../card';
import Link from 'next/link';


export default function CardWrapper() {
  const { data } = useProduct();
  const list = data?.data.data;
  return (
    <div id='recommand-card-wrapper' className='flex flex-row justify-between pb-10'>
      {list&&
        list.map((product: ProductProps) => 
          <div key={product.name}>
            <Link href={'/'}>
              <RecommandCard {...product} />
            </Link>
          </div>
        )
      }
    </div>
  );
}
