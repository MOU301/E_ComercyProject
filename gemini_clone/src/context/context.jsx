import { createContext, useEffect, useState, useSyncExternalStore } from "react";
import run from '../config/gemini';
import { use } from "react";
export const Context=createContext();
 

const ContextProvider=({children})=>{
  const [loading,setLoading]=useState(false);
  const [result,setResult]=useState('');
  const [recent,setRecent]=useState([]);
  const [sent,setSent]=useState(false);
  const [prompt,setPrompt]=useState('');
const onSent=async (item)=>{
   setResult('');
     recent.includes(item) ? null : setRecent(e=>[...e,item]);
   const response=await run(item);
   let responseArray=response.split("**");
   let newResponse='';
   setLoading(false);
   for(let i=0; i<responseArray.length ; i++){
      if(i === 0 || i%2 === 1){
         newResponse+=responseArray[i];
      }
      else{
         newResponse+="<b>"+responseArray[i]+"</b>";
      }
   }
const newResponse2=newResponse.split("*").join('</br>').split('?').join('?</br>'); 
  const newResponseArray=newResponse2.split(' ');
  for(let i=0 ; i<newResponseArray.length; i++){
       setTimeout(function(){
         setResult(e=>e+newResponseArray[i]+" ");
       },75*i);
  }
  setSent(false);
  }
useEffect(()=>{
onSent(prompt);
},[prompt])
useEffect(()=>{
   console.log(recent)
},[recent])
    const values={
prompt,setPrompt,setSent,setResult,result,loading,setLoading,recent
    }
    return( 
    <Context.Provider value={values}>
       {children}
    </Context.Provider>
    )
  
}
export default ContextProvider;