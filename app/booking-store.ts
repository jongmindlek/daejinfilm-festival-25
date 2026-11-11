export const BOOKING_STORAGE_KEY="dcp-festival-bookings-v1";
export const SECTION_CAPACITY=321;
export const MAX_TICKETS=5;
export type Booking={id:string;code:string;createdAt:string;sections:number[];cancelled:boolean;invitedBy?:string};
export function readBookings():Booking[]{if(typeof window==="undefined")return[];try{return JSON.parse(localStorage.getItem(BOOKING_STORAGE_KEY)||"[]") as Booking[]}catch{return[]}}
export function writeBookings(bookings:Booking[]){localStorage.setItem(BOOKING_STORAGE_KEY,JSON.stringify(bookings))}
export function createBooking(sections:number[],invitedBy:string):Booking{const now=new Date();return{id:crypto.randomUUID(),code:`DCP-${String(now.getMonth()+1).padStart(2,"0")}${String(now.getDate()).padStart(2,"0")}-${Math.random().toString(36).slice(2,8).toUpperCase()}`,createdAt:now.toISOString(),sections,cancelled:false,invitedBy:invitedBy.trim()}}
