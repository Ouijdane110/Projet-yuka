import React from 'react';
import { Alert } from 'react-native';
import Svg, { Path, G } from 'react-native-svg';

const Historique = ({ color, height, width }) => {
    return (
        <Svg
        width={width}
        height={height}
        viewBox="0 0 19 19"
      >
        <G id="prefix__XMLID_193_">
          <Path
            fill={color}
            d="M9.7 6.5V10c0 .1.1.3.1.4l2.5 2.5.7-.7-2.4-2.4V6.5h-.9z"
          />
          <Path
            fill={color}
            d="M10.7 2.5c-3.5 0-6.4 2.6-6.9 6H1.7L4.2 11l2.5-2.5H4.8c.5-2.8 2.9-5 5.9-5 3.3 0 6 2.7 6 6s-2.7 6-6 6c-1.9 0-3.6-.8-4.7-2.3l-.8.6c1.3 1.7 3.3 2.7 5.5 2.7 3.9 0 7-3.1 7-7s-3.1-7-7-7z"
          />
        </G>
      </Svg>
    )
}

export default Historique;