import React from 'react';
import Svg, { Path } from 'react-native-svg';

const Hearth = ({ color, height, width }) => {
    return (
        <Svg 
            width={width} 
            height={height} 
            viewBox="0 0 19 19"
        >
            <Path
            d="M13.3 2.8c-.8 0-1.6.3-2.3.8-.6.5-1 1.1-1.3 1.6-.2-.5-.7-1.1-1.3-1.6-.7-.5-1.5-.8-2.3-.8C3.8 2.8 2 4.7 2 7.2c0 2.7 2.2 4.6 5.5 7.4.6.5 1.2 1 1.9 1.6.1.1.2.1.3.1s.2 0 .3-.1c.7-.6 1.3-1.1 1.9-1.6 3.3-2.8 5.5-4.7 5.5-7.4 0-2.5-1.8-4.4-4.1-4.4z"
            fill={color}
            />
      </Svg>
    )
}

export default Hearth;