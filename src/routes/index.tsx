import AppLoader from "components/apploader";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes as Router, Route, Navigate } from "react-router-dom";
import { setStatusesAction } from "store/reducers/statuses";
import routes from "./routes";
import { useDispatch } from "react-redux";
import { DispatchType } from "store/index";

const Routes: React.FC = () => {
    const [routeComponent, setRouteComponent] = useState<React.ReactElement[]>([]);
    const dispatch: DispatchType = useDispatch();

    useEffect(() => {
        (async () => {
            let newRouteComponent: React.ReactElement[] = []
            const getRoute = (routes?: any, path?: string) => {
                for (let i = 0; i < routes.length; i++) {
                    let route = routes[i];
                    let Component = route.Component;
                    let newpath = path ? path + route.path : route.path;
                    if (Component) {
                        newRouteComponent.push(<Route key={newpath} path={newpath} element={<Component />} />);
                    }
                    if (route.children.length) {
                        getRoute(route.children, newpath);
                    }
                }
            }
            getRoute(routes)
            setRouteComponent(newRouteComponent)
            initialize()
        })()
    }, [])

    const initialize = async () => {
        dispatch(setStatusesAction());
        // dispatch(setAppLoader(true))
        // dispatch(await setTasks())
        // dispatch(await setGroups())
        // dispatch(await setStatuses())
        // dispatch(setAppLoader(false))
    }

    return <BrowserRouter>
        {/* <AppLoader /> */}
        <Router>
            {routeComponent}
        </Router>
    </BrowserRouter>
}

export default Routes;
