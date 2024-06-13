import type { Metadata } from 'next';
import style from '@/ui/global.module.css';

export const metadata: Metadata = {
  title: '예약 이체',
}

export default function ReservationPage() {
  return (
    <div>
      <div className={style.title}>
        예약이체
      </div>
    </div>
  );
}