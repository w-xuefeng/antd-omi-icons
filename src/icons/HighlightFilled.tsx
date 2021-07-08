// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import HighlightFilledSvg from '@ant-design/icons-svg/es/asn/HighlightFilled';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-highlight-filled')
export default class HighlightFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'HighlightFilled';
  static tagName = 'o-highlight-filled';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={HighlightFilledSvg} />;
  };
}