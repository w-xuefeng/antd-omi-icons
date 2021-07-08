// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import ZoomOutOutlinedSvg from '@ant-design/icons-svg/es/asn/ZoomOutOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-zoom-out-outlined')
export default class ZoomOutOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'ZoomOutOutlined';
  static tagName = 'o-zoom-out-outlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={ZoomOutOutlinedSvg} />;
  };
}