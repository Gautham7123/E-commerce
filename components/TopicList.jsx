import Link from "next/link";
import RemoveBtn from "./RemoveBtn";
import { HiPencilAlt } from "react-icons/hi";

const getTopics= async () =>{
  try{
     const res=await fetch('http://localhost:3000/api/topic',{cache:"no-store",})
  
  if(!res.ok){
    throw new Error("Failed to fetch ");
  }
return res.json();
}
  catch(error){
      console.log("Error",error);
  }
}


export default function TopicList() {
  
  return (
    <>
      <div className="p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start">
        <div>
          <h2 className="font-bold text-2xl">Topic Title</h2>
          <div>Topic Description</div>
        </div>
        <div className="flex gap-2"> 
            <RemoveBtn />
            <Link href={'/editTopic/123'}>
            <HiPencilAlt size={24} /> 
            </Link>
        </div>
      </div>
    </>
  );
}
