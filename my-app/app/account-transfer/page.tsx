import type { Metadata } from 'next';
import style from '@/ui/global.module.css';
import TransferNotice from '@/ui/account-transfer/page01/transfer-notice';
import TransferForm from '@/ui/account-transfer/page01/transfer-form';
import TransferHeader from '@/ui/account-transfer/transfer-header';
import WithdrawalInfo from '@/ui/account-transfer/page02/withdrawal-info';
import DepositInfo from '@/ui/account-transfer/page02/deposit-info';
import TransferBtn from '@/ui/account-transfer/page02/transfer-btn';
import Result from '@/ui/account-transfer/page03/result';

export const metadata: Metadata = {
  title: '계좌 이체',
}

export function Page01() {
  const title = '이체정보 입력';
  const number = '01';

  return(
    <div>
      <TransferHeader number={number} title={title} />
      <TransferForm />
      <TransferNotice />
    </div>
  )
}

export function Page02() {
  const title = '이체정보 확인';
  const number = '02';

  return(
    <div>
      <TransferHeader number={number} title={title} />
      <WithdrawalInfo />
      <DepositInfo />
      <TransferBtn />
    </div>
  )
}

export function Page03() {
  const title = '이체완료';
  const number = '03';

  return(
    <div>
      <TransferHeader number={number} title={title} />
      <Result />
    </div>
  )
}

export default function AccountTransferPage() {
  return (
    <div>
      <div className={style.title}>
        즉시이체
      </div>
      <Page01 />
    </div>
  );
}