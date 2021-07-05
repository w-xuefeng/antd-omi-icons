// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import SmallDashOutlinedSvg from '@ant-design/icons-svg/lib/asn/SmallDashOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-small-dash-outlined')
export default class SmallDashOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'SmallDashOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={SmallDashOutlinedSvg}></AntdIcon>;
  };
}