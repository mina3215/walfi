import SearchBar from '../searchbar';
import { Blue500Button } from '../buttons';

function CheckBox({type}:{type:string}) {
  return (
    <div className='flex px-2'>
      <input type="checkbox" id="items-option" />
      <p>{type}</p>
    </div>
  )
}

const checkOptions = ['인터넷', '모바일','영업점','전화신규']

export default function SearchContainer() {
  return (
    <div className='flex items-center h-20 w-full border-y-2 border-slate-300 bg-gray-100'>
      <div className='flex justify-between items-center px-10 w-full'>
        {
          checkOptions.map((type) =>
            <div key={type}>
              <CheckBox type={type} />
            </div>)
        }
        <SearchBar className='border-2 border-black py-[3px] w-[400px] h-11 bg-slate-50' placeholder='검색어를 입력하세요' />
        <Blue500Button buttonLabel='검색' className='px-4 py-2'/>
      </div>
    </div>
  )
}
