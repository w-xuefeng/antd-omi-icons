// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import HighlightOutlinedSvg from '@ant-design/icons-svg/es/asn/HighlightOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-highlight-outlined')
export default class HighlightOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'HighlightOutlined';
  static tagName = 'o-highlight-outlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={HighlightOutlinedSvg} />;
  };
}