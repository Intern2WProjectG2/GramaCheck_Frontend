import React, { useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMessage } from '@fortawesome/free-solid-svg-icons'
import { sendSlackMessage } from '../services/utils.js';

import { useAuthContext } from "@asgardeo/auth-react";
import { DefaultLayout } from "../layouts/Default.jsx";
import DialogBox from "../components/DialogBox.jsx";
import Loading from "../components/Loading.jsx";

export const Help = () => {
    const history = useHistory();
    const [open, setOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const {
        getAccessToken
    } = useAuthContext();

    const formRef = useRef(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        const formData = new FormData(formRef.current);
        const helpMessage = formData.get('help');
        // Perform further actions with the form data

        sendSlackMessage(helpMessage, await getAccessToken())
            .then(() => {
                setIsLoading(false);
                setOpen(true);
            });
    };

    return (
        <DefaultLayout>
            <div className="container" style={{ backgroundColor: " #f5f5f5", boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.2)", height: "500px" }}>
                <div >
                    <h1 style={{ fontSize: "35px", marginTop: "20px", color: "#282c34", }}>
                        Support
                        <FontAwesomeIcon icon={faMessage} style={{ color: "#0c255b", marginLeft: "10px" }} />
                    </h1>
                </div>

                <form style={{ margin: "90px", marginTop: "50PX" }} ref={formRef} onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <div className="form-floating">
                            <textarea name="help" className="form-control " placeholder="Hey! we're here to help!" id="floatingTextarea2" style={{ height: "200px", borderRadius: "10px", boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.2)" }}></textarea>
                            <label htmlFor="floatingTextarea2">Hey! we're here to help!</label>
                        </div>
                    </div>

                    <button type="submit" className="btn btn-primary"
                        style={{ backgroundColor: "#0c255b", color: "white", border: "1px solid #0c255b" }}
                        onMouseEnter={(e) => {
                            e.target.style.backgroundColor = "white";
                            e.target.style.color = "#0c255b";
                            e.target.style.border = "1px solid #0c255b";
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.backgroundColor = "#0c255b";
                            e.target.style.color = "white";
                        }}
                    >Send</button>
                </form>
            </div>

            {open && <DialogBox
                setOpen={setOpen}
                alert="Your message has been successfully sent to the slack channel. Please join the GramaCheck slack channel to get further support."
                handleContinue={() => history.push('/')}
            />}

            {isLoading && <Loading
                alert="Please wait. The message is being sent to the slack channel."
            />}
        </DefaultLayout>
    );
}