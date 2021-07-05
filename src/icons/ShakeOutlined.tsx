// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import ShakeOutlinedSvg from '@ant-design/icons-svg/lib/asn/ShakeOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-shake-outlined')
export default class ShakeOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'ShakeOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={ShakeOutlinedSvg}></AntdIcon>;
  };
}