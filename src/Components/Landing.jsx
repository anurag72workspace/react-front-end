import React from 'react';
import Button from '@material-ui/core/Button';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import SchoolIcon from '@material-ui/icons/School';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import CheckIcon from '@material-ui/icons/Check';

const Landing = () =>{
   const img1 = "https://reactnativeexample.com/content/images/2018/07/result.png";
   const img2 = "https://images.ctfassets.net/4cd45et68cgf/356rdxOIFafL2WxHWNRE9O/7d735dde847bb0583052872a2511426f/malaysians-can-now-enjoy-netflix-starting-rm17_month_.jpg";
   const img3 = "https://i.stack.imgur.com/7vMmx.jpg";
    return (
        <>
            <div className="container landing">
            <h1>Subscription Billing & Revenue Operations</h1>
            <h3>for Fast-growth B2B CSS3</h3>
            <br/>
            <p>Get the operational sophistication to achieve, sustain,<br/>
            and scale recurring revenue.</p>          
            <div className="container-fluid container-fluid-max">
            <div className="row">
          <div className="col-12 col-md-8 col-lg-6 mx-auto">
            <div className="bothbtn">
            <Button className="btn1">Schedule a Demo</Button>
            <Button className="btn2">Sign up for free</Button>   
            </div>
          </div>
        </div>
      </div>  
  </div>
  <section className="second-section">
  <p>Thousands of Scaling CSS3 Businesses Love Us</p>
  <div id="carouselExampleControls" class="carousel slide " data-bs-ride="carousel ">
  <div class="carousel-inner ">
    <div class="carousel-item active">
      <h3><PlayCircleOutlineIcon />MusicPlayer</h3>
    </div>
    <div class="carousel-item">
        <h3><LocalHospitalIcon />Hospital</h3>
    </div>
    <div class="carousel-item">
        <h3><SchoolIcon />School</h3>
    </div>
    <div class="carousel-item">
        <h3><AccountBalanceIcon  />School</h3>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </a>
</div>
  </section>
        {/* second section  */}
        <div className="container-second mt-5 ">
        <div className="container-fluid container-fluid-max">
            <div className="row">
          <div className="col-12 col-md-8 col-lg-6 mx-auto">
            <div className="lefttext">
             <p className="fpara">No more spreadsheet errors</p>
             <h4>Automate Recurring Billing</h4>
             <p>Scale your CSS3 through 480+ recurring Billing <br />
             scerarios that automate who you bill,<br />
             when, and how. No humans, no spreadsheets, no missed payments!</p>
                <br/>
              
                <div className="container-fluid container-fluid-max">
            <div className="row">
          <div className="col-12 col-md-8 col-lg-6 mx-auto">
            <div>
            <p><CheckIcon style={{color:"green"}} /> Billing Schedule</p>
            <p><CheckIcon style={{color:"green"}} /> Tax management</p>   
            </div>
          </div>
          <div className="col-12 col-md-8 col-lg-6 mx-auto">
            <div>           
            <p><CheckIcon style={{color:"green"}} /> Proration & Invoicing</p>
            <p><CheckIcon style={{color:"green"}} /> Payment Methods</p>  
            </div>
          </div>
        </div>
      </div> 
                <Button className="learn" style={{border : "1px solid blue",color:"blue"}}>Learn more <ArrowForwardIcon className="btnarrow" />
                </Button>
                   
            </div>
          </div>
          <div className="col-12 col-md-8 col-lg-6 mx-auto">
            <div className="setimg">
             <img src={img1} />
            </div>
          </div>
        </div>
      </div>  
        </div>

               {/* section fourth */}
            
            <div className="container-second mt-5 ">
        <div className="container-fluid container-fluid-max">
            <div className="row">
            <div className="col-12 col-md-8 col-lg-6 mx-auto">
            <div className="setimg">
             <img src={img2} />
            </div>
          </div>
          
          <div className="col-12 col-md-8 col-lg-6 mx-auto">
            <div className="lefttext">
             <p className="fpara">No more developer depandency</p>
             <h4>Smarte Subscription Management</h4>
             <p>Experiment rapidly with pricing structures, <br />
             product catalogs, and subscription lifecycles<br />
             with a business-user-first experience.</p>
                <br/>
               
                <div className="container-fluid container-fluid-max">
            <div className="row">
          <div className="col-12 col-md-8 col-lg-6 mx-auto">
            <div>
            <p><CheckIcon style={{color:"green"}} /> Price modeling</p>
            <p><CheckIcon style={{color:"green"}} /> Trial mamagement</p>   
            </div>
          </div>
          <div className="col-12 col-md-8 col-lg-6 mx-auto">
            <div>           
            <p><CheckIcon style={{color:"green"}} /> Product Catalog</p>
            <p><CheckIcon style={{color:"green"}} /> Lifecycle automation</p>  
            </div>
          </div>
        </div>
      </div> 
                <Button className="learn" style={{border : "1px solid blue",color:"blue"}}>Learn more <ArrowForwardIcon className="btnarrow" />
                </Button>
                   
            </div>
          </div>
          
        </div>
      </div>  
        </div>
      
      
        {/* last section */}

        <div class="container">
<div class="card-group mx-5 mb-5">
  <div class="card  mt-5 mx-3 mb-5">
    <div class="card-body">
      <h5 class="card-title text-center" >Still unsure? Step Inside and See <br />
      What The Future Looks Like.</h5>
     </div>
  </div>
  <div class="card ml-right mt-5 mx-3 mb-5">
    <div class="card-body text-center">
      <Button className="btncard">Schedule a Demo</Button>
    </div>
  </div>
  </div>
</div>
        </>
    );
};

export default Landing;