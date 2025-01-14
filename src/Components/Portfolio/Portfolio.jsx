import React, { useRef, useState } from "react";
import img1 from "../../assets/poert1.png";
import img2 from "../../assets/port2.png";
import img3 from "../../assets/port3.png";
import Desplay from "../Desplay/Desplay";

export default function Portfolio() {
  
  const [Toggel, setToggel] = useState(false)
  const [Imajes, setImajes] = useState([img1, img2, img3, img1, img2, img3]);
  const currImage = useRef()
  const changeImage = useRef()




  function myImage(index,imge) {
    
  currImage.current.setAttribute("src", imge)
  
}

  function disApper(e){
    
    if (e.target.id == "hey") {
      setToggel(false)
    }
  
}

  function apper() {
    if (Toggel) {
      setToggel(false)
      
    } else {
      setToggel(true)
    }
    return Toggel

  }

  return (
    <>
      <div className="w-[90%] mx-auto">
        <div className=" text-center w-1/2 mx-auto">
          <h1 className='text-[#2c3e50] after:top-[100%] after:right-[30%] after:w-[15%] after:absolute after:content-[""] after:h-[4px] after:bg-[#2c3e50] relative  before:top-[100%] before:left-[30%]  md:text-[39px] text-[15px] font-bold before:content-[""] before:absolute before:w-[15%] before:h-[4px] before:bg-[#2c3e50] '>
            PORTFOLIO COMPONENT
          </h1>
          <i className="fa-solid fa-star  text-[#2c3e50]"></i>
        </div>
        <div className="flex flex-wrap gap-y-8 my-6">
          {Imajes.map((imge, index) => {
            return (
              <div 
              onClick={()=>{myImage(index,imge)}}
                key={index}
                className="md:w-1/3 flex justify-center items-center"
              >
                <div
                  onClick={() => {
                    apper();
                  }}
                  className="w-[90%] relative group "
                >
                  <img
                    className="w-[100%] relative rounded-lg"
                    src={imge}
                    alt="gf"
                    ref={changeImage}
                    
                  />
                  <div className="layer absolute flex transition-opacity delay-200 group-hover:opacity-100 justify-center opacity-0 items-center inset-0 rounded-lg bg-opacity-[90%] bg-green-400">
                    <i className="fa-solid fa-plus text-[100px] text-white"></i>
                  </div>
                </div>
              </div>
            );
          })}
          <div id="hey" onClick={(e)=>{disApper(e)}} className={Toggel ? " text-green-400 flex items-center justify-center fixed inset-0 bg-black bg-opacity-[0.5]": "hidden"}>
            <div>
              <img ref={currImage} src={img1} alt="" className="w-full" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
