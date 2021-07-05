// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import KeyOutlinedSvg from '@ant-design/icons-svg/lib/asn/KeyOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-key-outlined')
export default class KeyOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'KeyOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={KeyOutlinedSvg}></AntdIcon>;
  };
}