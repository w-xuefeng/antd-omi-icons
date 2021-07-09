// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

const DashOutlinedSvg: AntdIconProps['icon'] = {"icon":{"tag":"svg","attrs":{"viewBox":"64 64 896 896","focusable":"false"},"children":[{"tag":"path","attrs":{"d":"M112 476h160v72H112zm320 0h160v72H432zm320 0h160v72H752z"}}]},"name":"dash","theme":"outlined"};

@tag('o-dash-outlined')
export default class DashOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'DashOutlined';
  static tagName = 'o-dash-outlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={DashOutlinedSvg} />;
  };
}