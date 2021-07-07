// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import UnlockTwoToneSvg from '@ant-design/icons-svg/lib/asn/UnlockTwoTone';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-unlock-two-tone')
export default class UnlockTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'UnlockTwoTone';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={UnlockTwoToneSvg} />;
  };
}