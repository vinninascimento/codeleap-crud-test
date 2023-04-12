import React from "react";
import { Route, BrowserRouter, Switch } from 'react-router-dom'

import { LOADING_PAGE, SIGNUP, MAIN } from "./routes.js";

import LoadingPage from "../../pages/Loading/index";
import SignUp from "../../pages/SignUp/index";
import Main from "../../pages/Main/index";


const Navigator = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path={LOADING_PAGE} exact component={LoadingPage} />
                <Route path={SIGNUP} exact component={SignUp} />
                <Route path={MAIN} exact component={Main} />
            </Switch>
        </BrowserRouter>
    );
}

export default Navigator;