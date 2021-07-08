// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import FormatPainterOutlinedSvg from '@ant-design/icons-svg/es/asn/FormatPainterOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-format-painter-outlined')
export default class FormatPainterOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'FormatPainterOutlined';
  static tagName = 'o-format-painter-outlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={FormatPainterOutlinedSvg} />;
  };
}