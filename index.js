/**
 * @format
 */

import React, {Component} from 'react';
import {AppRegistry} from 'react-native';
// import App from './App';
import {name as appName} from './app.json';
//import BasicFlatListData from './component/BasicFlatListData';
//import menu from './component/menu';
import Home from './component/Home';
import BasicFlatListData from './component/BasicFlatListData';

AppRegistry.registerComponent(appName, () => BasicFlatListData);
