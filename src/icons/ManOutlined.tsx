// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import ManOutlinedSvg from '@ant-design/icons-svg/es/asn/ManOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-man-outlined')
export default class ManOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'ManOutlined';
  static tagName = 'o-man-outlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={ManOutlinedSvg} />;
  };
}