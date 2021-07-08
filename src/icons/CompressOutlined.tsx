// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import CompressOutlinedSvg from '@ant-design/icons-svg/es/asn/CompressOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-compress-outlined')
export default class CompressOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'CompressOutlined';
  static tagName = 'o-compress-outlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={CompressOutlinedSvg} />;
  };
}