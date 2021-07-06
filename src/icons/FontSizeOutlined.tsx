// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import FontSizeOutlinedSvg from '@ant-design/icons-svg/lib/asn/FontSizeOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-font-size-outlined')
export default class FontSizeOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'FontSizeOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={FontSizeOutlinedSvg}></AntdIcon>;
  };
}