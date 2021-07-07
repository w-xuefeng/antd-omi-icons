// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import MobileOutlinedSvg from '@ant-design/icons-svg/lib/asn/MobileOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-mobile-outlined')
export default class MobileOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'MobileOutlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={MobileOutlinedSvg} />;
  };
}