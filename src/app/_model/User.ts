import { Photo } from "./Photo";

export interface User {
  id:any;
  Email:string;
  name:string;
  phoneNumber:string;
  gender:string;
  age:number;
  knownAs:string
  created:Date;
  photoUrl:string;
  lastActive:Date;
  city:string;
  country:string;
  introduction?:string;
  lookingFor?:string;
  interests?:string;
  Photo?:Photo[];
}
