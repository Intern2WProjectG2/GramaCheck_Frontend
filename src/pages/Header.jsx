import React from "react";
import LOGO from '../images/logo.png';

export const Header = () => {
    return (
        
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <h1 class="navbar-brand" href="#">
                        <img src={LOGO} alt="" width="200" height="35" class="d-inline-block align-text-top" />
                        
                    </h1>
                    <button type="button" class="btn btn-outline-dark">Logout</button>
                </div>
            </nav>
        
    );
};
