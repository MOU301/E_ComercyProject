import React, { useContext, useState } from 'react'
import { IoSend } from "react-icons/io5";
import { MdKeyboardVoice } from "react-icons/md";
import { LuImageMinus } from "react-icons/lu";
import { FaRegMessage } from "react-icons/fa6";
import { Context } from '../context/context';


const Main = () => {
  const {prompt,result,setResult,setPrompt,setSent,loading,setLoading}=useContext(Context);
  const [question,setQuestion]=useState('');
  const styleSend=question.length>0 ? "icon mx-2 fs-4":"d-none";
  const handlSearch=()=>{
    if(question.length>0){
      setLoading(true);
      setPrompt(question);

      setSent(true);
      setQuestion('');
    }
    else{
      console.log('bitte fill the field now ');
    }
  }
  return (
    <div className='main p-5'>
      <div className="d-flex justify-content-between align-content-center align-items-center  ">
        <h5>Gemini</h5>
        <div className="image">
          <img src="src/assets/avitar.jpg" alt="" />
        </div>
      </div>
      <div >
          <div className='py-5'>
            <div className="one">
              {!loading ? (
                <>
                {result!='' ? <><h4 className='mb-4 text-danger'>{prompt} ? </h4><p dangerouslySetInnerHTML={{__html:result}}></p></>:(
               <>
                <div className="title">
                <h1 className='colors '>Hallo, Dev.</h1>
                <h1 className='text-gray'>How can I help you today</h1>
              </div>
              <div className='cards my-5'>
                <div className="row">
                  <div className="col-sm-3 col-12">
                    <div className="item p-2">
                       Lorem ipsum dolor sit amet consectetur adipisicing elit.
                       <FaRegMessage  className='icon-card'/>
                    </div>
                  </div>

                  <div className="col-sm-3 col-12">
                    <div className="item p-2">
                       Lorem ipsum dolor sit amet consectetur adipisicing elit.
                       <FaRegMessage  className='icon-card'/>
                    </div>
                  </div>
                  <div className="col-sm-3 col-12">
                    <div className="item p-2">
                       Lorem ipsum dolor sit amet consectetur adipisicing elit.
                       <FaRegMessage  className='icon-card'/>
                    </div>
                  </div>
                  <div className="col-sm-3 col-12">
                    <div className="item p-2">
                       Lorem ipsum dolor sit amet consectetur adipisicing elit.
                       <FaRegMessage  className='icon-card'/>
                    </div>
                  </div> 
                </div>

              </div>
               </>
              )}
                </>):(
                 <>
                 <h4 className='mb-4 text-danger'>{prompt} ? </h4>
                 <div className="loader">
                    <hr/>
                    <hr/>
                    <hr/>
                  </div>
                 </>

                )}
              <div className="search my-5 p-2 d-flex justify-content-between align-content-center align-items-center">
                <input type="text" onChange={(e)=>setQuestion(e.target.value)} value={question} className='px-3' placeholder='Enter a porblem here' />
                <div className='d-flex '>
                    <LuImageMinus className='icon mx-2 fs-4' />
                    <MdKeyboardVoice className='icon mx-2 fs-4'/>
                    <IoSend onClick={()=>handlSearch()} className={styleSend}/>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}
export default Main
