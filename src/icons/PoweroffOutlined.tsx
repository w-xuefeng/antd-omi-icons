// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import PoweroffOutlinedSvg from '@ant-design/icons-svg/lib/asn/PoweroffOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-poweroff-outlined')
export default class PoweroffOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'PoweroffOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={PoweroffOutlinedSvg}></AntdIcon>;
  };
}