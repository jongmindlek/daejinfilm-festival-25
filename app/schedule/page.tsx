import{Footer,Header,PageTitle}from"../site-components";

const data=[
  {section:"01",time:"10:55 — 11:50",films:["WHO is NEXT?","단군신화 - 두 명(命)의 길","프렌치 사일런스"],breakTime:"11:50 — 12:15"},
  {section:"02",time:"12:20 — 12:55",films:["불법채도: 404 Not Found","우주 괴짜"],breakTime:"12:55 — 13:15"},
  {section:"03",time:"13:15 — 14:50",films:["징크스 모집","지하격투","한이슬 전용칸"],breakTime:"14:50 — 15:15"},
  {section:"04",time:"15:15 — 18:00",films:["연속","우이, 헤어지쟈","키르기스스탄 짜장면 배달부","망향"],breakTime:"18:00 — 18:20"}
];

export default function Schedule(){return <div className="site-page"><Header active="schedule"/><main className="content"><PageTitle eyebrow="SCREENING SCHEDULE" title="상영시간표"><p>11월 20일, 한국영상자료원 KOFA 1관에서 만나요.</p></PageTitle><div className="date">11.20 금</div><section className="schedule-list program-list">{data.map((d,i)=><div className="program-block" key={d.section}><article><span>0{i+1}</span><time>{d.time}</time><div><p>SECTION {d.section}</p><h2>상영작 {d.films.length}편</h2><ol>{d.films.map(f=><li key={f}>{f}</li>)}</ol></div><a href="/reservation">예매</a></article><div className="program-break"><span>Guest Visit · 관객과의 대화 / Break Time</span><time>{d.breakTime}</time></div></div>)}</section><section className="closing-program"><span>관객 투표 및 폐막식</span><time>18:20 — 19:15</time></section></main><Footer/></div>}
