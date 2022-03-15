import React from "react";
import { Switch } from 'react-router-dom'
import { toast } from "react-toastify";
import MyRoute from "./Myroute";

import Login from '../pages/Login'
import Page404 from '../pages/Page404'


export default function Routes() {
    toast.success('oie')
    toast.error('oie')
    return (
        
            <Switch>
                <MyRoute exact path="/" component={Login} />
                <MyRoute exact path="*" component={Page404} />

            </Switch>
       
    )


}