"use client";
import {useEffect,useState} from "react";
import type {Film} from "./film-data";
export function FilmModal({film,onClose}:{film:Film;onClose:()=>void}){
 const[still,setStill]=useState(0);useEffect(()=>setStill(0),[film.title]);const count=film.stills.length;
 return <div className="modal film-detail-modal" role="dialog" aria-modal="true" aria-label={`${film.title} 작품 상세`} onMouseDown={event=>event.target===event.currentTarget&&onClose()}><div><button type="button" className="close" aria-label="닫기" onClick={onClose}>×</button><div className={`detail-still ${count?"has-image":"unreleased"}`} style={count?{backgroundImage:`url("${film.stills[still]}")`}:undefined}>{!count&&<i>{film.title}<br/><strong>미공개</strong></i>}</div>{count>1&&<><button type="button" className="prev" aria-label="이전 스틸컷" onClick={()=>setStill((still+count-1)%count)}>←</button><button type="button" className="next" aria-label="다음 스틸컷" onClick={()=>setStill((still+1)%count)}>→</button></>}<div className="film-detail-copy staff-only"><div className="detail-title"><h2>{film.title}</h2><small>{count?`${still+1} / ${count}`:"스틸컷 미공개"}</small></div><div className="key-staff-panel"><small>KEY STAFF</small><h3>키스태프</h3><p>{film.keyStaff||"추후 공개"}</p></div></div></div></div>
}
