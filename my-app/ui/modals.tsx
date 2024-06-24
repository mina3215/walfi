import SearchBar from './searchbar';

// function Modal(props: {
//   size: string,
//   color?: string,

// }) {
//   const {color} = props;
//   return (
//     <div className='absolute bg-${color} justify-center'>
//     </div>
//   )
// }

export default function ModalSearch() {
  return (
    <div className='absolute bg-white flex justify-center items-center top-12 right-0 left-0 border h-52 w-full'>
      <SearchBar className='border-2 border-black py-[3px] w-[400px] h-11 bg-slate-50' placeholder='검색어를 입력하세요' />
    </div>
  )
}

// w - full rounded - md border border - gray - 200 py - [9px] 