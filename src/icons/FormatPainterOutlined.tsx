// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import FormatPainterOutlinedSvg from '@ant-design/icons-svg/lib/asn/FormatPainterOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-format-painter-outlined')
export default class FormatPainterOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'FormatPainterOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={FormatPainterOutlinedSvg}></AntdIcon>;
  };
}