import React from 'react';
import {AppRegistry,StatusBar} from 'react-native';

/* Import Main */
import Pithre from "./src/pithre";

StatusBar.setBackgroundColor('#F4511E');
AppRegistry.registerComponent('Pithre', () => Pithre);
