// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import BorderBottomOutlinedSvg from '@ant-design/icons-svg/lib/asn/BorderBottomOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-border-bottom-outlined')
export default class BorderBottomOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'BorderBottomOutlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={BorderBottomOutlinedSvg} />;
  };
}