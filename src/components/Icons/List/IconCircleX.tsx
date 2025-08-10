import Svg, { Path } from 'react-native-svg';
import { THEME } from '@src/constants';
import { IIcon } from '@src/types';

function IconCircleX({
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
      <Path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
      <Path d="M10 10l4 4m0 -4l-4 4" />
    </Svg>
  );
}

export default IconCircleX;
