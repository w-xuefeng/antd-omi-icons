// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import EnterOutlinedSvg from '@ant-design/icons-svg/lib/asn/EnterOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-enter-outlined')
export default class EnterOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'EnterOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={EnterOutlinedSvg}></AntdIcon>;
  };
}