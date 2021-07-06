// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import ToolTwoToneSvg from '@ant-design/icons-svg/lib/asn/ToolTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-tool-two-tone')
export default class ToolTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'ToolTwoTone';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={ToolTwoToneSvg}></AntdIcon>;
  };
}