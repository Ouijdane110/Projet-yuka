import React from 'react';
import { Text } from 'react-native';
import globalStyle from '../../utils/globalStyle';

const B = props => <Text style={globalStyle.bold}>{props.children}</Text>

export default B;