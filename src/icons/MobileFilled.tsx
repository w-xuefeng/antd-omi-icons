// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import { rmIEFP } from 'omi-tools';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

const MobileFilledSvg: AntdIconProps['icon'] = {"icon":{"tag":"svg","attrs":{"viewBox":"64 64 896 896","focusable":"false"},"children":[{"tag":"path","attrs":{"d":"M744 62H280c-35.3 0-64 28.7-64 64v768c0 35.3 28.7 64 64 64h464c35.3 0 64-28.7 64-64V126c0-35.3-28.7-64-64-64zM512 824c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40z"}}]},"name":"mobile","theme":"filled"};

declare global {
  namespace JSX {
    interface IntrinsicElements {
      ['o-mobile-filled']: Omi.Props & Partial<AntdIconProps>
    }
  }
}

@tag('o-mobile-filled')
export default class MobileFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'MobileFilled';
  static tagName = 'o-mobile-filled';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...rmIEFP(props)} icon={MobileFilledSvg} />;
  };
}