// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import ArrowDownOutlinedSvg from '@ant-design/icons-svg/es/asn/ArrowDownOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-arrow-down-outlined')
export default class ArrowDownOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'ArrowDownOutlined';
  static tagName = 'o-arrow-down-outlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={ArrowDownOutlinedSvg} />;
  };
}