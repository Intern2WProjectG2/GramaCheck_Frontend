import React from "react";

const Loading = (props) => {
    const { setOpen, alert } = props;

    return (
        <div className="alert_page">
            <div className="alert">
                <p>{alert}</p>
            </div>
        </div>
    );
}

export default Loading;