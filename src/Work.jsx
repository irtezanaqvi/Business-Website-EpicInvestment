import React from "react";
import work1 from "./work1.png";
import work2 from "./work2.png";
import work3 from "./work3.png";

function Work(){
return(
<div className="containerWork">
<div className="infoWork">
<div className="top-heading-work">
            <div className="vv"></div>
                <h5><p className="kk">Our Work</p></h5>
                <h2><p>See our recent work </p></h2>
            <h5 id="hid">Lorem ipsum is simply dummy text of the printing and typesetting industry has been the industry's standard dummy text ever since the one and known printer took the galley.
            </h5>
            </div>
            <button class="button  arrow custombtn">See all Projects</button>



</div>
<div className="tiles">
<div class="slider owl-carousel">
         <div class="card">
            <div class="img">
               <img src={work1} alt=""/>
            </div>
            
         </div>
         <div class="carding">
            <div class="img">
               <img src={work2} alt=""/>
            </div>
            
         </div>
         <div class="card">
            <div class="img">
               <img src={work3} alt=""/>
            </div>
           
         </div>
      </div>




</div>





</div>

)


}

export default Work;