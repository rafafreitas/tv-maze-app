import Svg, { Path } from 'react-native-svg';
import { THEME } from '@src/constants';
import { IIcon } from '@src/types';

function IconArrowLeft({
  size = 20,
  color = THEME.black,
  stroke = 2,
  style,
}: IIcon) {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      style={style}
    >
      <Path d="M0 0h24v24H0z" fill="none" stroke="none" />
      <Path d="M5 12l14 0" />
      <Path d="M5 12l6 6" />
      <Path d="M5 12l6-6" />
    </Svg>
  );
}

export default IconArrowLeft;
