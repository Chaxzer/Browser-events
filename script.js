//-----------------------------For first div-----------------------------------

change1=()=>{
  // document.getElementById("main").innerHTML="click";
}

change2=()=>{
   document.getElementById("main").innerHTML="mouse down";//onmousemousedown shown when mouse is click holded
    }
    
change3=()=>{
  // document.getElementById("main").innerHTML="mouse enter";//onmouseenter shown when mouse has enterred the element
      }
      
 change4=()=>{
   // document.getElementById("main").innerHTML="mouse leave";//onmouseleave shown when mouse leaves the element
        }
        
change5=()=>{
  document.getElementById("main").innerHTML="mouse out";//onmouseleave shown when mouse leaves the element
          }
          
 change6=()=>{
   document.getElementById("main").innerHTML="mouse over";//onmousetover shown when mouse is over the element
            }
            
change7=()=>{
  // document.getElementById("main").innerHTML="mouse move";//onmouseMove shown when mouse is moving over the element
              }
              
change8=()=>{
  document.getElementById("main").innerHTML="mouse up";//onmouseup shown when mouse is released from the element
                }

 change9=()=>{
   document.getElementById("main").innerHTML="mouse wheel";//onmousewheel shown when mouse wheel is rotated
                  }

//----------------------------------------------------------------------------------

//-----------------------------For 2nd div-----------------------------------------

let ins = document.getElementById("bro");
ins.onclick = () => {      // onclick is a predefined function 
  ins.innerHTML = "click";
};

//---------------------------------------------------------------------------------