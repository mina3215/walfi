import type { Metadata } from 'next';
import style from '@/ui/global.module.css';
import TransferNotice from '@/ui/account-transfer/transfer-notice';

export const metadata: Metadata = {
  title: '계좌 이체',
}

export default function AccountTransferPage() {
  return (
    <div>
      <div className={style.title}>
        즉시이체
      </div>
      <TransferNotice />
    </div>
  );
}