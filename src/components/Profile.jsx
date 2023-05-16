import React from "react";
import profile from "../images/profile.png";
import "../App.css";

export const Profile = () => {
 
  return (
    <div class="container justify-content-center"  style={{border:"#fff"}}>
    <div class="row border-curve" style={{border:"1px solid #0c255b"}}>
      <div class="col-lg-5 "style={{border:"#fff"}}>
        <div class="card text-center"style={{border:"#fff"}}>
           <div class="card-body justify-content-center"style={{border:"#fff", alignItems:"center"}}>
           <img src={profile} class="card-img-top"  style={{width:"200px", height:"200px", alignItems:"center"}} alt="Card 1 Image"/>
           </div>
          </div>
        </div>
        <div class="col-lg-6 left-aligned"style={{border:"#fff"}}>
        <div class="card "style={{border:"#fff"}}>
           <div class="card-body ">
            <div class="table-responsive">
      <table class="table table-borderless align-middle">
     
        <tbody>
          <tr>
          <th scope="row">NIC</th>
          <td>889756789V</td>
          </tr>

          <tr>
          <th scope="row">ADDRESS</th>
          <td>67/9S, Nugegoda, Colombo, Western Province</td>
          </tr>

          <tr>
          <th scope="row">POSTAL CODE</th>
          <td>11234</td>
          </tr>

          <tr>
          <th scope="row">GRAMASEWA DIVISION NUMBER</th>
          <td>12345</td>
          </tr>

        </tbody>
      </table>
    </div>
         </div>
          </div>
        </div>
      </div>
     </div>  
  );
};


