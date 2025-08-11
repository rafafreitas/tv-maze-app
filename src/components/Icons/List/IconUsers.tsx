import Svg, { Path } from 'react-native-svg';
import { THEME } from '@src/constants';
import { IIcon } from '@src/types';

function IconUsers({
  size = 20,
  color = THEME.black,
  stroke = 2,
  ...props
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
      {...props}
    >
      <Path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <Path d="M9 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
      <Path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
      <Path d="M16 3.13a4 4 0 0 1 0 7.75" />
      <Path d="M21 21v-2a4 4 0 0 0 -3 -3.85" />
    </Svg>
  );
}

export default IconUsers;
