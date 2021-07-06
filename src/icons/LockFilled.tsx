// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import LockFilledSvg from '@ant-design/icons-svg/lib/asn/LockFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-lock-filled')
export default class LockFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'LockFilled';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={LockFilledSvg}></AntdIcon>;
  };
}