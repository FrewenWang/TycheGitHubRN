import React from "react";
import {Lightbox, Router, Scene} from "react-native-router-flux";
import routerStyles from "./resources/styles/RouterStyles";
import PageBackUtils from "./utils/BackUtils";
import SplashPage from "./pages/SplashPage";
import LoginPage from "./pages/LoginPage";
import {PageName} from "./constant/PageName"

/**
 * 这个getRouters是一个箭头函数
 */
const getRouters = () => {
    return (
        <Router
            getSceneStyle={() => {
                return routerStyles.routerStyle;
            }}
            backAndroidHandler={PageBackUtils()}>
            <Lightbox>
                <Scene key="main">
                    <Scene
                        key={PageName.SplashPage}
                        component={SplashPage}
                        hideNavBar
                        hideTabBar
                        hide
                    />
                </Scene>
                <Scene key={PageName.LoginPage}>
                    <Scene component={LoginPage} showLabel={false} hideNavBar/>
                </Scene>
            </Lightbox>
        </Router>
    );
}

export default getRouters;
