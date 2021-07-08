// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import BgColorsOutlinedSvg from '@ant-design/icons-svg/es/asn/BgColorsOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-bg-colors-outlined')
export default class BgColorsOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'BgColorsOutlined';
  static tagName = 'o-bg-colors-outlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={BgColorsOutlinedSvg} />;
  };
}