/* eslint-disable no-unsafe-optional-chaining */
"use client";

import useUserInfo from '@/services/user/useUserService'
import React, { useEffect, useState } from 'react';


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

export function LoginedPhrase({ name }:{name:string}) {
  return (
    <div>
      <p className='font-bold'>안녕하세요, {name || '고객'}님!</p>
      <p>아침부터 부지런한 당신, 오늘도 힘내세요</p>
    </div>
  )
}

export function PharaseBox({ component: Component }: { component: React.FC<{name:string}> }) {
  const { data, isLoading, isError } = useUserInfo();
  const [name, setName] = useState('고객');
  useEffect(() => {
    if (!isLoading && !isError) {
      setName(data?.data.data.name || '고객'); // 기본값 설정
    }
  }, [data, isLoading, isError]); // 의존성 배열 추가
  
  return (
    <div className='py-7 text-xl'>
      <Component name={name}/>
    </div>
  )
}

export function RecommandPharase({ name }:{name:string}) {
  return (
    <div>
      <p >{name || '고객'} 고객님께 추천하는 상품입니다.</p>
    </div>
  )
}
