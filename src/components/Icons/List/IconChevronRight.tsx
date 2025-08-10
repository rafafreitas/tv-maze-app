import Svg, { Path } from 'react-native-svg';
import { THEME } from '@src/constants';
import { IIcon } from '@src/types';

function IconChevronRight({
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
      <Path d="M9 6l6 6l-6 6" />
    </Svg>
  );
}

export default IconChevronRight;
