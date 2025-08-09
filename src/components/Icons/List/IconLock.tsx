import Svg, { Path } from 'react-native-svg';
import { THEME } from '@src/constants';
import { IIcon } from '@src/types';

function IconLock({
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
      <Path d="M0 0h24v24H0z" fill="none" stroke="none" />
      <Path d="M5 13a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-6z" />
      <Path d="M11 16a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />
      <Path d="M8 11v-4a4 4 0 1 1 8 0v4" />
    </Svg>
  );
}

export default IconLock;
