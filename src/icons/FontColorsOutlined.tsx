// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import FontColorsOutlinedSvg from '@ant-design/icons-svg/lib/asn/FontColorsOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-font-colors-outlined')
export default class FontColorsOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'FontColorsOutlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={FontColorsOutlinedSvg} />;
  };
}