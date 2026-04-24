import './App.css'
import { useState,useEffect } from 'react'
import Header from './components/Header'
import Main from './components/Main'
import bgImage from './assets/img/bg-earth.jpg';
import bgImageDay from './assets/img/bg-day.png';

function App() {
  // 1. 다크모드
  const [isDark,setIsDark] = useState(false);
  // 2. 도시정보
  const [city,setCity] = useState("Seoul");

  const handleSearch = (newcity) => {
        setCity(newcity);
  }

  useEffect(() => {
    // 다크모드 시간 설정 (낮:오전6시~,밤:오후6시~)
    const checkTime = () => {
      const hour = new Date().getHours();
      if(hour >= 18 || hour < 6) {
        setIsDark(true);
      } else {
        setIsDark(false);
      }
    }
    checkTime();
  },[city])

  const currentBg = isDark ? bgImage : bgImageDay;
  const boxStyle = 'bg-white/10 backdrop-blur-lg rounded-[15px]';

  return (
    <>
      <div className='relative min-h-screen text-white bg-slate-900 overflow-x-hidden'>
        {/* 1. 배경 이미지 레이어 */}
        <div 
          className='fixed inset-0 bg-cover bg-center bg-no-repeat z-0'
          style={{backgroundImage:`url(${currentBg})`}}
        />
        
        {/* 2. 배경을 살짝 어둡게 해주는 오버레이 (텍스트 가독성) */}
        <div className='fixed inset-0 bg-black/40 z-10'/>
        
        {/* 3. 실제 컨텐츠 영역 */}
        <div className='relative flex justify-center items-center min-h-screen py-10 z-20 '>
          <div className="inner">
            <Header onSearch={handleSearch}/> 
            <Main boxStyle={boxStyle} city={city}/>  
          </div>
        </div>

      </div>
    </>
  )
}

export default App
