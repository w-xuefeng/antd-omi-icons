// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import { rmIEFP } from 'omi-tools';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

const DashOutlinedSvg: AntdIconProps['icon'] = {"icon":{"tag":"svg","attrs":{"viewBox":"64 64 896 896","focusable":"false"},"children":[{"tag":"path","attrs":{"d":"M112 476h160v72H112zm320 0h160v72H432zm320 0h160v72H752z"}}]},"name":"dash","theme":"outlined"};

declare global {
  namespace JSX {
    interface IntrinsicElements {
      ['o-dash-outlined']: Omi.Props & Partial<AntdIconProps>
    }
  }
}

@tag('o-dash-outlined')
export default class DashOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'DashOutlined';
  static tagName = 'o-dash-outlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...rmIEFP(props)} icon={DashOutlinedSvg} />;
  };
}