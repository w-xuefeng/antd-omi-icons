// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import BellOutlinedSvg from '@ant-design/icons-svg/lib/asn/BellOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-bell-outlined')
export default class BellOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'BellOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={BellOutlinedSvg}></AntdIcon>;
  };
}