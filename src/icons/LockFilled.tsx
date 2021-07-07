// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import LockFilledSvg from '@ant-design/icons-svg/lib/asn/LockFilled';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-lock-filled')
export default class LockFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'LockFilled';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={LockFilledSvg} />;
  };
}