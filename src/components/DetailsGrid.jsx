const DetailsGrid = ({boxStyle,humidity, wind, pressure,rain, feelsLike, visibility,icon}) => {
     const Weather_List = [
        { id: 1, label: "습도", value:humidity, icon:"💧"},
        { id: 2, label: "바람", value:wind, icon:"💨"},
        { id: 3, label: "기압", value:pressure, icon:"☁️"},
        { id: 4, label: "강수량", value:rain, icon:"☔"},
        { id: 5, label: "체감온도", value:feelsLike, icon:"🌡️"},
        { id: 6, label: "가시거리", value:visibility, icon:"👀"},
    ];
    return (
        <div>
            <div className="grid grid-cols-2 gap-4 lg:grid-cols-3">
                {Weather_List.map((item) => (
                    <div key={item.id} className={`${boxStyle} flex flex-col gap-5 p-4 lg:p-5`}>
                        <h3 className="text-[14px] text-white/50 lg:text-[16px]">{item.label}</h3>
                        <div className="flex justify-between">
                            <p className="text-[20px] font-bold lg:text-[24px]">{item.value}</p>
                            <span className="text-[20px] lg:text-[24px]">{item.icon}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default DetailsGrid;