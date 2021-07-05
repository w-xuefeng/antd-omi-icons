// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import FontColorsOutlinedSvg from '@ant-design/icons-svg/lib/asn/FontColorsOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-font-colors-outlined')
export default class FontColorsOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'FontColorsOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={FontColorsOutlinedSvg}></AntdIcon>;
  };
}