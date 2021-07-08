// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import AmazonOutlinedSvg from '@ant-design/icons-svg/es/asn/AmazonOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-amazon-outlined')
export default class AmazonOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'AmazonOutlined';
  static tagName = 'o-amazon-outlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={AmazonOutlinedSvg} />;
  };
}