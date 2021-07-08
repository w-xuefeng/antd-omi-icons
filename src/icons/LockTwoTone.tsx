// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import LockTwoToneSvg from '@ant-design/icons-svg/es/asn/LockTwoTone';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-lock-two-tone')
export default class LockTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'LockTwoTone';
  static tagName = 'o-lock-two-tone';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={LockTwoToneSvg} />;
  };
}