// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import HighlightTwoToneSvg from '@ant-design/icons-svg/lib/asn/HighlightTwoTone';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-highlight-two-tone')
export default class HighlightTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'HighlightTwoTone';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={HighlightTwoToneSvg} />;
  };
}