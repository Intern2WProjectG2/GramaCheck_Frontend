import React from "react";

const DialogBox = (props) => {
    const { setOpen, alert, handleContinue } = props;

    return (
        <div className="alert_page">
            <div className="alert">
                <p>{alert}</p>

                <input type="button" className="submitBtn"
                    onClick={() => handleContinue()} value="Continue" />
            </div>
        </div>
    );
}

export default DialogBox;