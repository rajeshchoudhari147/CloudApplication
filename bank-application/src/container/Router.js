import {Actions} from "react-native-router-flux";

///定义路由标识
export const WelcomeRouter = 'WelcomeRouter';
export const MainRouter = 'MainRouter';
export const RegistRouter = 'RegistRouter';
export const LoginRouter = 'LoginRouter';

///页面跳转
export function pushTo(name, params) {
    Actions.push(name, params);
}

///返回上一页
export function pop() {
    Actions.pop();
}

///返回指定页面
export function popTo(name, params) {
    Actions.popTo(name, params);
}