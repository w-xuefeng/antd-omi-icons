// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import FormatPainterFilledSvg from '@ant-design/icons-svg/lib/asn/FormatPainterFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-format-painter-filled')
export default class FormatPainterFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'FormatPainterFilled';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={FormatPainterFilledSvg}></AntdIcon>;
  };
}