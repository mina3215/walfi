
export default function () {
  // 추후 변경 필
  const isLogined = true;
  return (
    <div>
      <button>{isLogined?'로그아웃':'로그인'}</button>
    </div>
  )
}