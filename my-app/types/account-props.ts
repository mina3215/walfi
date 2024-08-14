export default interface Account {
  계좌번호: string | null;         // 예: "110001785530" 또는 null
  과세: string | null;             // 예: "일반과세" 또는 null
  관리점명: string | null;         // 예: "영업부" 또는 null
  구분: string | null;             // 예: "예적금" 또는 null
  금리수익률: number | null;      // 예: 0 또는 null
  만기일: Date | null;            // 예: null 또는 만기일
  상품명: string | null;          // 예: "저축예금" 또는 null
  신규일: Date | null;            // 예: null 또는 "2023-09-10T15:00:00.000+00:00"
  자동해지여부: number | null;    // 예: 0 또는 null
  잔액원화: string | null;        // 예: "25691892" 또는 null
  잔액통화별: string | null;      // 예: "25691892" 또는 null
  통화: string | null;            // 예: "KRW" 또는 null
  평가금액원화: string | null;    // 예: "25691892" 또는 null
  평가금액통화별: string | null;  // 예: "25691892" 또는 null
}