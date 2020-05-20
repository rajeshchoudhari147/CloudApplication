import {Platform, Dimensions} from "react-native";

export const {width, height} = Dimensions.get('window');            //屏幕宽度 屏幕高度

export const iOS = Platform.OS === "ios";                           //判断是否是iOS平台

export const iPhoneX = iOS && (width === 375 || width === 414) && (height === 812 || height === 896);      //判断是否是iPhoneX

export const statebarHeight = iPhoneX ? 44 : 20;                    //状态栏高度 iPhoneX 44 其设备 20

export const navbarHeight = 44 + statebarHeight;                    //导航栏高度 iPhoneX 88 其他设备 64


export function reallySize(size) {                                  //真实尺寸
    return width / 750 * size;
}
