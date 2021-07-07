// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import LayoutTwoToneSvg from '@ant-design/icons-svg/lib/asn/LayoutTwoTone';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-layout-two-tone')
export default class LayoutTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'LayoutTwoTone';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={LayoutTwoToneSvg} />;
  };
}