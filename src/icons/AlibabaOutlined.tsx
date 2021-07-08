// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import AlibabaOutlinedSvg from '@ant-design/icons-svg/es/asn/AlibabaOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-alibaba-outlined')
export default class AlibabaOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'AlibabaOutlined';
  static tagName = 'o-alibaba-outlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={AlibabaOutlinedSvg} />;
  };
}