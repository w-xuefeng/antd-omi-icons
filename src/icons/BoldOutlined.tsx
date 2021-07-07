// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import BoldOutlinedSvg from '@ant-design/icons-svg/lib/asn/BoldOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-bold-outlined')
export default class BoldOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'BoldOutlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={BoldOutlinedSvg} />;
  };
}