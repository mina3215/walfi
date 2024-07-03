
export function LogoutedPhrase() {
  return (
    <div>
      <p>몸도 마음도</p>
      <p>화창한 봄날,</p>
      <p>행복한 하루 되세요.</p>
    </div>
  )
}

/**
 * 
 * @param name : 사용자 이름 
 * @returns 문구
 */

export function LoginedPhrase() {
  return (
    <div>
      <p className='font-bold'>안녕하세요,박민아님!</p>
      <p>아침부터 부지런한 당신, 오늘도 힘내세요</p>
    </div>
  )
}