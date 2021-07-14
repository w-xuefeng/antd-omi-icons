// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import { rmIEFP } from 'omi-tools';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

const StopFilledSvg: AntdIconProps['icon'] = {"icon":{"tag":"svg","attrs":{"viewBox":"64 64 896 896","focusable":"false"},"children":[{"tag":"path","attrs":{"d":"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm234.8 736.5L223.5 277.2c16-19.7 34-37.7 53.7-53.7l523.3 523.3c-16 19.6-34 37.7-53.7 53.7z"}}]},"name":"stop","theme":"filled"};

declare global {
  namespace JSX {
    interface IntrinsicElements {
      ['o-stop-filled']: Omi.Props & Partial<AntdIconProps>
    }
  }
}

@tag('o-stop-filled')
export default class StopFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'StopFilled';
  static tagName = 'o-stop-filled';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...rmIEFP(props)} icon={StopFilledSvg} />;
  };
}