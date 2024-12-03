import React,{useContext} from "react";
import { assets } from "../../assets/assets";
import "./Main.css"

import { GlobalContext } from "../../context/context";


export const Main = () => {

    const {onSent,recentPrompt,showResult,loading, resultData,setInput, input} = useContext(GlobalContext);


    return (
       <div className="main">
            <div className="nav">
                <p>Gemini</p>
                <img src={assets.user_icon} alt="" />
            </div>

            <div className="main-container">
                {!showResult ? 
                <>
                    <div className="greet">
                    <p><span>Hello, Abhishek.</span></p>
                    <p>How can I help you today?</p>
                </div>

                <div className="cards">

                    <div className="card">
                        <p>Suggest beautiful places to see on an upcoming road trip</p>
                        <img src={assets.compass_icon} alt="" />
                    </div> 
                    
                    <div className="card">
                        <p>Briefly summarize this concept: urban planning</p>
                        <img src={assets.bulb_icon} alt="" />
                    </div> 

                    <div className="card">
                        <p>Explain briefly the concepts of FlexBox</p>
                        <img src={assets.code_icon} alt="" />
                    </div>

                    <div className="card">
                        <p>Generate an Essay on topic: Liberty</p>
                        <img src={assets.message_icon} alt="" />
                    </div>
                    
                </div> 
                </>
                 : 

                <div className="result">
                    <div className="result-title">
                        <img src={assets.user_icon} alt="" />
                        <p>{recentPrompt}</p>
                    </div>
                    <div className="result-data">
                        <img src={assets.gemini_icon} alt="" />
                        <p dangerouslySetInnerHTML={{_html:resultData}}></p>
                    </div>
                </div>
                    

                }
                
    

                <div className="main-bottom">
                    <div className="search-box">
                        <input onChange={(e)=>setInput(e.target.value)} value={input} type="text" placeholder="Enter a prompt here" />
                        <div>
                            <img src={assets.gallery_icon} alt="" />
                            <img src={assets.mic_icon} alt="" />
                            <img onClick={()=>onSent()} src={assets.send_icon}  alt="" />
                        </div>
                    </div>
                    <p className="bottom-info">Gemini may display inaccurate info,including about people, so double-check its responses. Your privacy and Gemini Apps</p>
                </div>

            </div>

       </div>
    )
}