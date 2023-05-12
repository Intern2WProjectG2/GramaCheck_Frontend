import { AuthProvider, useAuthContext } from "@asgardeo/auth-react";
import React, { FunctionComponent, ReactElement } from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import { default as authConfig } from "./config.json";
import { ErrorBoundary } from "./ErrorBoundary.jsx";
import { HomePage, NotFoundPage } from "./pages";
import { ApplyForm } from "./pages/ApplyForm.jsx";

const AppContent = () => {
    const { error } = useAuthContext();
    
    return (
        <ErrorBoundary error={error}>
            <Router>
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/apply-form" component={ApplyForm} />
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
