const MainWeather = ({boxStyle,temp,city,desc,icon}) => {
    // 오늘날짜
    const today = new Date();
    const dateString = today.toLocaleDateString('ko-kr',{
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        weekday: 'long',
    });

    const iconUrl = `https://openweathermap.org/img/wn/${icon}@4x.png`;
    return (
        <div className={`${boxStyle} flex flex-col justify-between gap-[60px] h-full p-5 lg:p-10`}>
            <div className="info flex justify-between items-center">
                <div className="right">
                    <h2 className="text-[30px] font-black lg:text-[40px] ">{city}</h2>
                    <p className="text-[14px] text-white/50 lg:text-[16px]">{dateString}</p>
                </div>
                <div className="left">
                    <span className="text-[60px] "><img src={iconUrl} alt={desc} className='w-32 h-32'/></span>
                </div>
            </div>
            <div className="temp-info flex items-baseline gap-3">
                <h3 className="text-[60px] font-black lg:text-[80px]">{temp}°</h3>
                <p className="text-[14px]">{desc}</p>
            </div>
        </div>
    )
}
export default MainWeather;