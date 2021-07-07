// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import ToolTwoToneSvg from '@ant-design/icons-svg/lib/asn/ToolTwoTone';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-tool-two-tone')
export default class ToolTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'ToolTwoTone';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={ToolTwoToneSvg} />;
  };
}