import { AuthProvider, useAuthContext } from "@asgardeo/auth-react";
import React, { FunctionComponent, ReactElement } from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import { default as authConfig } from "./config";
import { ErrorBoundary } from "./ErrorBoundary.jsx";
import { HomePage, NotFoundPage } from "./pages";

const AppContent = () => {
    const { error } = useAuthContext();
    
    return (
        <ErrorBoundary error={error}>
            <Router>
            <Switch>
                <Route exact path="/" component={HomePage} />
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
