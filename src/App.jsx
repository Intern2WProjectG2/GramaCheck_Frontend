import { AuthProvider, useAuthContext } from "@asgardeo/auth-react";
import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
// import { default as authConfig } from "./config";
import authConfig from "./config.js"
import { ErrorBoundary } from "./ErrorBoundary.jsx";
import { LandingPage, NotFoundPage } from "./pages";
import { ApplyForm } from "./pages/ApplyForm.jsx";
import { StatusList } from "./pages/StatusList.jsx";
import { CheckStatus } from "./pages/CheckStatus.jsx";

const AppContent = () => {
    const { error } = useAuthContext();

    return (
        <ErrorBoundary error={error}>
            <Router>
                <Switch>
                    <Route exact path="/" component={LandingPage} />
                    <Route exact path="/apply-form" component={ApplyForm} />
                    <Route exact path="/status-list" component={StatusList} />
                    <Route exact path="/check-status" component={CheckStatus} />
                    <Route component={NotFoundPage} />

                </Switch>
            </Router>
        </ErrorBoundary>
    )
};

const App = () => (
    <AuthProvider config={authConfig}>
        <AppContent />
    </AuthProvider>
);

render((<App />), document.getElementById("root"));
