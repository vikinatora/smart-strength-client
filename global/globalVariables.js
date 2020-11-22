import {Dimensions, NativeModules } from "react-native";

const { height } = Dimensions.get('window');
const { StatusBarManager } = NativeModules;

export const SCREEN_HEIGHT = height;
export const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBarManager.HEIGHT;

// Vanka change this to your local ip address when testing or the app won't run
export const BASEURI = "https://192.168.1.5:44340";