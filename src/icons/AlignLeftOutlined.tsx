// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

const AlignLeftOutlinedSvg = {"icon":{"tag":"svg","attrs":{"viewBox":"64 64 896 896","focusable":"false"},"children":[{"tag":"path","attrs":{"d":"M120 230h496c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm0 424h496c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm784 140H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0-424H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8z"}}]},"name":"align-left","theme":"outlined"};

@tag('o-align-left-outlined')
export default class AlignLeftOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'AlignLeftOutlined';
  static tagName = 'o-align-left-outlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={AlignLeftOutlinedSvg} />;
  };
}