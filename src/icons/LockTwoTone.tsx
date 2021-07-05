// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import LockTwoToneSvg from '@ant-design/icons-svg/lib/asn/LockTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-lock-two-tone')
export default class LockTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'LockTwoTone';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={LockTwoToneSvg}></AntdIcon>;
  };
}