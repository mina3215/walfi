// import type { Metadata } from 'next';
import style from '@/ui/global.module.css';
import ItemDetail from '@/ui/financial-item/item-detail';
import { Blue500Button, Gray400Button  } from '@/ui/buttons';
import { requestGet } from '@/utils/http-common';
import { notFound } from 'next/navigation';

// export const metadata: Metadata = {
//   title: '금융상품 조회',
// }

export default async function FinancialItemsPage({params}:{params:{item:number}}) 
{
  const { item } = params;
  const detail = await requestGet(`product/detail?idx=${item}`).catch((e) => {
    notFound();
  });
  const data = detail?.data.data;
  return (
    <div className={style.pagecontainer}>
      <div className={`${style.title}`}>
        <p className='text-black border-b-2 pb-3'>상품 안내</p>
      </div>
      <ItemDetail detail={data} />
      <div id='buttons' className='flex w-full justify-center h-[100px] items-center'>
        <Gray400Button buttonLabel='전화상담요청' href='/' className='p-2 mr-5 grid-rows-1 w-32' />
        <Blue500Button buttonLabel='가입하기' href='/' className='p-2 ml-5 grid-rows-1 w-32'/>
      </div>
      <div id='detail-rate'>
        ㅁㄴㅇㄹ
      </div>
    </div>
  );
}