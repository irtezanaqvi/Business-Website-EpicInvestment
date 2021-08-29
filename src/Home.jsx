import React from "react";
import one from "./1.png";
import two from "./2.png";
import three from "./3.png";
import four from "./4.png";
import five from "./5.png";

function Home(){
return(
<div>
<section id="header" className="homesection">
    <div className="container-fluid nav-bg imageholder">
        <div className="row customrow">
            <div className="col-md-10 customboxhome">
                <div className="holdertext">
                <p>Business solutions for </p>
                <p>ambitious, fast growing, brands.</p>
                <p><h6 id="head1">An instance of Digital Collective is tailored and configured for unique needs and deployed</h6></p>
                <p><h6 id="head2"> into action, working collaboratively with your team and deliver a personlized engagement experience. </h6></p>
                <button class="button  arrow">Start a Project</button>
                </div>
                

            </div>

        </div>



    </div>



    






</section>
<div class="logos d-flex justify-content-center">
        <div class="logo-row d-flex flex-column flex-md-row ">
            <div class="img-div">
                <img src={one} alt="" />
            </div>
            <div class="img-div">
                <img src={two} alt="" />
            </div>
            <div class="img-div">
                <img src={three} alt="" />
            </div>
            <div class="img-div">
                <img src={four} alt="" />
            </div>
            <div class="img-div">
                <img src={five} alt="" />
            </div>
        </div>

    </div>
    

</div>

)


}

export default Home;