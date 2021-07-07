// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import ThunderboltOutlinedSvg from '@ant-design/icons-svg/lib/asn/ThunderboltOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-thunderbolt-outlined')
export default class ThunderboltOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'ThunderboltOutlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={ThunderboltOutlinedSvg} />;
  };
}