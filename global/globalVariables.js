import {Dimensions, NativeModules } from "react-native";

const { height } = Dimensions.get('window');
const { StatusBarManager } = NativeModules;

export const SCREEN_HEIGHT = height;
export const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBarManager.HEIGHT;

// API Url
export const BASEURI = "http://192.168.1.2:45455";