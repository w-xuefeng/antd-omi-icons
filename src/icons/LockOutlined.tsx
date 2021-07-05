// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import LockOutlinedSvg from '@ant-design/icons-svg/lib/asn/LockOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-lock-outlined')
export default class LockOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'LockOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={LockOutlinedSvg}></AntdIcon>;
  };
}