// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import FireOutlinedSvg from '@ant-design/icons-svg/lib/asn/FireOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-fire-outlined')
export default class FireOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'FireOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={FireOutlinedSvg}></AntdIcon>;
  };
}