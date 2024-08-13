import type { Metadata } from 'next';
import style from '@/ui/global.module.css';

export const metadata: Metadata = {
  title: '환율',
}

export default function Exchange() {
  return (
    <div>
      <div className={style.title}>
        환율
      </div>
    </div>
  );
}