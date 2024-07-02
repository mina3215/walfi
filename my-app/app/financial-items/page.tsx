import type { Metadata } from 'next';
import style from '@/ui/global.module.css';

export const metadata: Metadata = {
  title: '금융상품 조회',
}

export default function FinancialItemsPage() {
  return (
    <div>
      <div className={style.title}>
        금융상품 조회
      </div>
    </div>
  );
}