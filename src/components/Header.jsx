import { useState } from 'react';

const Header = ({onSearch}) => {
    // 사용자가 검색창에 타이핑하는 글자 하나하나를 실시간으로 저장
    const [inputValue,setInputValue] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault(); //페이지 새로고침 방지
        if(inputValue.trim()){ // 사용자가 공백만 입력했는지 확인. trim() > 앞뒤 공백을 제거
            onSearch(inputValue); // 입력받은 값을 부모 컴포넌트(App.js)로 보냄. handleSubmit 실행
            setInputValue(""); //검색이 완료된 후 검색창 비우기
        }
    }

    return (
        <header className="mb-5">
            <div className="flex  flex-col gap-10 lg:flex-row lg:items-center lg:justify-between lg:gap-0 lg:mb-[40px] ">
                <div className="main-title text-left">
                    <h1 className="text-[40px] font-bold lg:text-[60px] ">WEATHER</h1>
                </div>
                <form onSubmit={handleSubmit} className="serch-box flex gap-[10px] w-full p-[10px_20px] border border-white/50 rounded-[8px] lg:w-auto">
                    <input 
                        type="text" 
                        placeholder="위치를 입력하세요" 
                        className="w-[90%] outline-0" 
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                    />
                    <button onClick={handleSubmit}>🔍</button>
                </form>
            </div>
        </header>
    )
}
export default Header;