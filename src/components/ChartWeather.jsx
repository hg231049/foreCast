import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';

const ChartWeather = ({boxStyle,data}) => {
    /* rechart 라이브러리 npm install recharts */
    return (
         <div className={`${boxStyle} w-full h-64 p-5 lg:p-10 `}>
            <h3 className="text-[14px] text-white/50 font-bold mb-4 uppercase tracking-wider lg:text-[16px]">24hour Forecast</h3>
            <div className='w-full h-44'>
                {/* ResponsiveContainer 차트가 들어갈 전체 크기를 결정  */} 
                <ResponsiveContainer width="100%" height="100%" >
                    <AreaChart data={data}>
                        {/* 그라데이션 - 시작점(x1, y1)과 끝점(x2, y2는)  */} 
                        <defs>
                        <linearGradient id="colorTemp" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8}/>
                            <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                        </linearGradient>
                        </defs>
                        {/* 
                            배경 격자 CartesianGrid 
                            strokeDasharray : 점선의 패턴을 정의함
                            vertical : 세로선은 지우고 가로선만 남김.
                            stroke : 아주 연한 흰색 투명도를 줘서 배경 이미지와 자연스럽게 어울리게 함
                        */} 
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.1)" />
                        {/* 
                            차트의 뼈대 (XAxis, YAxis)
                            dataKey : 데이터 배열에서 어떤 값을 가로축/세로축에 쓸지 정함.
                            axisLine={false}, tickLine={false}: 축의 선과 눈금선을 지워서 아주 깔끔한 디자인을 만듦.
                            dy={10}: 글자 위치를 살짝 아래로(Y축 방향으로 10px) 내려서 차트와 겹치지 않게 간격을 줌.
                            hide: 세로축 숫자를 아예 숨깁니다. 대시보드에서는 정확한 수치보다 **"추세"**가 중요할 때 공간 확보를 위해 자주 숨김
                            domain={['dataMin - 5', 'dataMax + 5']}: 그래프가 너무 바닥에 붙거나 천장에 붙지 않게, 최소값보다 5도 낮게, 최대값보다 5도 높게 표시 범위를 자동 조절
                        */} 
                        <XAxis 
                        dataKey="time" 
                        axisLine={false} 
                        tickLine={false} 
                        tick={{fill: 'rgba(255,255,255,0.5)', fontSize: 12}}
                        dy={10}
                        />
                        <YAxis hide domain={['dataMin - 5', 'dataMax + 5']} />
                        {/* 
                            인터랙션 Tooltip
                            사용자가 그래프 위에 마우스를 올렸을 때 나타나는 상자
                            contentStyle : 상자 자체의 디자인
                            itemStyle: 상자 안의 글자 색상
                        */} 
                        <Tooltip 
                        contentStyle={{backgroundColor: '#1e293b', border: 'none', borderRadius: '12px', fontSize: '14px'}}
                        itemStyle={{color: '#fff'}}
                        />
                        {/* 
                            시각적 효과 Area
                            type="monotone" : 꺾은선 그래프처럼 딱딱하게 꺾이는 게 아니라, 부드러운 곡선으로 연결
                            strokeWidth: 선의 굵기
                        */} 
                        <Area 
                        type="monotone" 
                        dataKey="temp" 
                        stroke="#3b82f6" 
                        strokeWidth={3}
                        fillOpacity={1} 
                        fill="url(#colorTemp)" 
                        />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}
export default ChartWeather;