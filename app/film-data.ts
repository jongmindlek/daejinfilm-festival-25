export type Film={title:string;slug?:string;poster?:string;stills:string[];director:string;runtime:string;genres:string;keyStaff:string};
export type FestivalSection={n:string;time:string;start:string;end:string;films:Film[]};
const film=(title:string,slug:string|undefined,count:number,director:string,runtime:string,genres:string,keyStaff=""):Film=>({title,slug,poster:slug?`/films/${slug}/poster.webp`:undefined,stills:slug?Array.from({length:count},(_,i)=>`/films/${slug}/still-${i+1}.webp`):[],director,runtime,genres,keyStaff});
export const FESTIVAL_SECTIONS:FestivalSection[]=[
 {n:"01",time:"10:55 — 11:50",start:"10:55",end:"11:50",films:[
  film("WHO is NEXT?","who-is-next",4,"박예진","19min","다큐멘터리","제작 · 조성우\n촬영 · 박예진, 서연희\n사운드 · 홍서빈\n편집 · 박예진\n색보정 · 김선우\n중국 현지촬영 · 왕위한\n번역 · 왕정하오"),
  film("단군신화 - 두 명(命)의 길",undefined,0,"조예원","8min","실험영화, 애니메이션, 판타지, 가상역사","1인 제작"),
  film("프렌치 사일런스","french-silence",3,"김대일","25min","다큐멘터리","촬영 · 주영서, 전나림, 김지현\n제작 · 석다은")]},
 {n:"02",time:"12:20 — 12:55",start:"12:20",end:"12:55",films:[
  film("불법채도: 404 Not Found","illegal-saturation",4,"양소을","18min","판타지, 블랙코미디, 성장 드라마","조연출 · 홍서빈, 김현지\nPD · 김현섭\n촬영 · 주영서\n조명 · 김지현\n편집 · 이민혁\n음향 · 홍서빈\n미술 · 전나림"),
  film("우주 괴짜","space-weirdo",4,"서태진","15min","드라마, 판타지","조연출 · 양시아\n제작 · 전주영\n촬영 · 나유현\n조명 · 윤설\n미술 · 임수연\n음향 · 김경민\n편집 · 서태진")]},
 {n:"03",time:"13:15 — 14:50",start:"13:15",end:"14:50",films:[
  film("징크스 모집","jinx-recruitment",4,"김현지","30min","드라마","촬영 · 주영서\n조명 · 진수호\n미술 · 전나림\n편집 · 김수민\n조연출 · 이수빈\n현장 조연출 · 박종현, 김경민\nPD · 정다은"),
  film("지하격투","underground-fight",4,"박해준","24min","액션, 드라마","조연출 · 김민채\n촬영 · 이준상\n조명 · 진수호\n음향 · 김수민\n미술 · 조성우\n편집 · 이승원"),
  film("한이슬 전용칸","haniseul-carriage",4,"한동훈","40min","드라마, 성장","PD · 양종준\n조연출 · 김규리\n촬영감독 · 김동준\n조명감독 · 윤설\n음향 / 동시 · 김경민\n미술감독 · 임수연\n편집감독 · 최명준")]},
 {n:"04",time:"15:15 — 18:00",start:"15:15",end:"18:00",films:[
  film("연속","yeonsok",4,"전주희","28min","드라마","조연출 · 김희정\n제작 PD · 유인선\nDOP · 김지현\n개퍼 · 최한휘\n음향 감독 · 서영준, 전주희\n미술 감독 · 이지인\n편집 감독 · 이승원"),
  film("우이, 헤어지쟈","wooi-breakup",4,"고연희","33min","성장, 로맨스","조연출 · 안세은\nPD · 이동규\nDP · 송종근\n개퍼 · 배진영\n미술 · 이지인\n편집 · 이승원"),
  film("키르기스스탄 짜장면 배달부","kyrgyz-delivery",4,"최명준","29min","로드무비","조연출 · 배소예\n제작 · 석다은\n촬영 · 김동준\n조명 · 조경빈"),
  film("망향","manghyang",4,"송종근","75min","역사 로맨스, 가족 드라마","각본 · 송종근\n프리 조연출 · 장준하\n현장 조연출 · 이연호, 배소예, 고연희\n제작 · 이동규\n촬영 · 김동준\n조명 · 조경빈\n미술 · 유인선\n음향 · 이용학\n동시녹음 · 박준형, 정찬율, 안지민, 이승원, 최명준\n편집 · 장준하")]},
];
