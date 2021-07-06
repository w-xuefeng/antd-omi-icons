// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import LayoutTwoToneSvg from '@ant-design/icons-svg/lib/asn/LayoutTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-layout-two-tone')
export default class LayoutTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'LayoutTwoTone';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={LayoutTwoToneSvg}></AntdIcon>;
  };
}