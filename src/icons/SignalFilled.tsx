// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import SignalFilledSvg from '@ant-design/icons-svg/lib/asn/SignalFilled';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-signal-filled')
export default class SignalFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'SignalFilled';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={SignalFilledSvg} />;
  };
}