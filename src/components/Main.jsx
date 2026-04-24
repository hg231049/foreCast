import { useState,useEffect } from 'react'
import MainWeather from './MainWeather'
import ChartWeather from './ChartWeather'
import DetailsGrid from './DetailsGrid'

const Main = ({boxStyle,city}) => {
    const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

    // 2. 날씨 데이터
      const [weather,setWeather] = useState(null);
      const [foreCast,setForeCast] = useState([]); // 차트용 데이터 상태
    
      const fetchWeather = async () => {
        try {
          // 2-1. 현재 날씨
          const CurrentUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
          const CurrentRes = await fetch(CurrentUrl);
          const CurrentData = await CurrentRes.json();
          setWeather(CurrentData); // 받은 데이터를 state에 저장
    
          // 2-2. 5일예보
          const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`;
            const forecastRes = await fetch(forecastUrl);
            const forecastData = await forecastRes.json();
            // 차트에서 사용할 데이터 8개(24시간분)만 추출해서 가공
            const processedData = forecastData.list.slice(0, 8).map(item => ({
                // '2026-04-23 15:00:00' -> '15:00' 형태로 변환
                time: item.dt_txt.split(' ')[1].substring(0, 5),
                temp: Math.round(item.main.temp)
            }));

            setForeCast(processedData); // 받은 예보 데이터를 state에 저장
        }
        catch (error) {
            console.error("데이터를 가져오는데 실패했습니다:", error);
            }
      }
    
      useEffect(() => {
        fetchWeather();
      }, [city]);

    return (
        <div className="main grid gap-5 grid-cols-1 lg:gap-5 lg:grid-cols-12">
            {weather ? (
                <>
                    <section className='h-full lg:col-span-4'>
                        <MainWeather 
                            boxStyle={boxStyle}
                            temp={Math.round(weather.main.temp)} 
                            city={weather.name}
                            desc={weather.weather[0].main}
                            icon={weather.weather[0].icon}
                        /> 
                    </section>
                    <section className='grid grid-cols-1 gap-5 h-full lg:col-span-8'>
                        <ChartWeather boxStyle={boxStyle} data={foreCast}/> 
                        <DetailsGrid 
                            boxStyle={boxStyle}
                            humidity={weather.main.humidity}
                            wind={weather.wind.speed}
                            feelsLike={Math.round(weather.main.feels_like)}
                            pressure={weather.main.pressure}
                            visibility={weather.visibility}
                            rain={weather.rain ? weather.rain['1h'] : 0}
                            icon={weather.weather[0].icon}
                        /> 
                    </section>
                </>
            ) :  (
              <div className="col-span-12 text-center py-20 text-xl font-bold">
                날씨 데이터를 불러오는 중입니다...
              </div>
            )
            }
        </div>
    )
}
export default Main;