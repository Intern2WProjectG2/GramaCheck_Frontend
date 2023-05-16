import React from "react";
import profile from "../images/profile.jpg";
import "../App.css";

export const Profile = () => {
 
  return (
    <div class="container justify-content-center"  style={{border:"#fff"}}>
    <div class="row border-curve" style={{border:"1px solid #0c255b"}}>
      <div class="col-lg-4 left-aligned"style={{border:"#fff"}}>
        <div class="card justify-content-center"style={{border:"#fff"}}>
           <div class="card-body justify-content-center"style={{border:"#fff"}}>
           <img src={profile} class="card-img-top"  style={{width:"200px", height:"200px", alignItems:"center"}} alt="Card 1 Image"/>
           </div>
          </div>
        </div>
        <div class="col-lg-6 left-aligned"style={{border:"#fff"}}>
        <div class="card "style={{border:"#fff"}}>
           <div class="card-body ">
            {/* <h4>NIC :  <span style={{fontSize:"20px"}}>987635567V</span> <br/></h4>
            <h4>ADDRESS :  <span style={{fontSize:"20px"}}>89/1A, </span> 
            <span style={{fontSize:"20px"}}>Nugegoda, </span> 
            <span style={{fontSize:"20px"}}>Colombo, </span>
            <span style={{fontSize:"20px"}}>Western Province</span> <br/></h4>
            <h4>POSTAL CODE :  <span style={{fontSize:"20px"}}>99067</span> <br/></h4>
            <h4>GRAMASEWA DIVISION NUMBER :  <span style={{fontSize:"20px"}}>4567</span> <br/></h4> */}
            <div class="table-responsive">
      <table class="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>John Doe</td>
            <td>john@example.com</td>
            <td>Admin</td>
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


