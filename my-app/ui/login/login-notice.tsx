export default function LoginNotice() {
  return (
    <div className='flex items-center justify-center py-24 px-10'>
      <div className='border-t border-gray-300 py-10'>
        <div className='items-center px-10 py-7 border border-gray-300'>
          <div className='py-2 font-extrabold text-[20px]'>
            📢 가짜 은행사이트에 속지 마세요!!
          </div>
          <div className='px-7 py-2 font-semibold text-blue-400 text-[15px]'>
            WALFI는 어떠한 이유로도 OTP카드와 보안카드 전체(35개) 또는 일부(2개 초과)를 요구하지 않습니다.
          </div>
          <div className='px-7 text-[12px]'>
            최근 금융기관 콜센터(WALFI 고객행복센터 1234-1234 등) 번호를 도용하여 개인정보유출 등 사유로 가짜사이트 접속을 유도하는 SMS가 발견되고 있습니다.
          </div>
          <div className='px-7 text-[12px]'>
            또한 PC에 악성코드가 설치될 경우 즐겨찾기 또는 정상 은행사이트를 입력하셔도 가짜 은행사이트에 연결될 수 있습니다.
          </div>
        </div>
      </div>
    </div>
  )
}