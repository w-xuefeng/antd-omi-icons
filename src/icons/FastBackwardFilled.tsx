// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import { rmIEFP } from 'omi-tools';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

const FastBackwardFilledSvg: AntdIconProps['icon'] = {"icon":{"tag":"svg","attrs":{"viewBox":"0 0 1024 1024","focusable":"false"},"children":[{"tag":"path","attrs":{"d":"M517.6 273.5L230.2 499.3a16.14 16.14 0 000 25.4l287.4 225.8c10.7 8.4 26.4.8 26.4-12.7V286.2c0-13.5-15.7-21.1-26.4-12.7zm320 0L550.2 499.3a16.14 16.14 0 000 25.4l287.4 225.8c10.7 8.4 26.4.8 26.4-12.7V286.2c0-13.5-15.7-21.1-26.4-12.7zm-620-25.5h-51.2c-3.5 0-6.4 2.7-6.4 6v516c0 3.3 2.9 6 6.4 6h51.2c3.5 0 6.4-2.7 6.4-6V254c0-3.3-2.9-6-6.4-6z"}}]},"name":"fast-backward","theme":"filled"};

@tag('o-fast-backward-filled')
export default class FastBackwardFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'FastBackwardFilled';
  static tagName = 'o-fast-backward-filled';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...rmIEFP(props)} icon={FastBackwardFilledSvg} />;
  };
}