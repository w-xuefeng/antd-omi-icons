// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import UnlockOutlinedSvg from '@ant-design/icons-svg/lib/asn/UnlockOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-unlock-outlined')
export default class UnlockOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'UnlockOutlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={UnlockOutlinedSvg} />;
  };
}