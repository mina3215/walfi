import type { Metadata } from 'next';
import style from '@/ui/global.module.css';
import SearchContainer from '@/ui/financial-item/search-container';
import ItemList from '@/ui/financial-item/item-list';
export const metadata: Metadata = {
  title: '금융상품 조회',
}

export default function FinancialItemsPage() {
  return (
    <div className={style.pagecontainer}>
      <div className={style.title}>
        금융상품 조회
      </div>
      <SearchContainer />
      <ItemList />
    </div>
  );
}