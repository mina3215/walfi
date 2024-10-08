import useProduct from '@/services/product/useProductService';
import { ProductProps } from '@/types/product-props';
import RecommandCard from '../card';


export default function CardWrapper() {
  const { data } = useProduct();
  const list = data?.data.data;
  return (
    <div id='recommand-card-wrapper' className='flex flex-row justify-between'>
      {list&&
        list.map((product: ProductProps) => 
          <div key={product.name}>
            <RecommandCard {...product} />
          </div>
        )
      }
    </div>
  );
}
