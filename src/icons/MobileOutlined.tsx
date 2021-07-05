// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import MobileOutlinedSvg from '@ant-design/icons-svg/lib/asn/MobileOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-mobile-outlined')
export default class MobileOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'MobileOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={MobileOutlinedSvg}></AntdIcon>;
  };
}