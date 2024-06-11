import type { Metadata } from 'next';
import style from '@/ui/global.module.css';

export const metadata: Metadata = {
  title: '즉시이체',
}

export default function AccountTransferPage() {
  return (
    <div>
      <div className={style.title}>
        즉시이체
      </div>
    </div>
  );
}