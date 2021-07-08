// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import ZoomInOutlinedSvg from '@ant-design/icons-svg/es/asn/ZoomInOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-zoom-in-outlined')
export default class ZoomInOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'ZoomInOutlined';
  static tagName = 'o-zoom-in-outlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={ZoomInOutlinedSvg} />;
  };
}