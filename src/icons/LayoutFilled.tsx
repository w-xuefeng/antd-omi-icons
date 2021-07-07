// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import LayoutFilledSvg from '@ant-design/icons-svg/lib/asn/LayoutFilled';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-layout-filled')
export default class LayoutFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'LayoutFilled';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={LayoutFilledSvg} />;
  };
}