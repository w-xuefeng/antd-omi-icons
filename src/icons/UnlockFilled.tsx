// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import UnlockFilledSvg from '@ant-design/icons-svg/lib/asn/UnlockFilled';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-unlock-filled')
export default class UnlockFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'UnlockFilled';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={UnlockFilledSvg} />;
  };
}