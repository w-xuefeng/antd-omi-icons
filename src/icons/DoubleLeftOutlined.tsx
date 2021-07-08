// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import DoubleLeftOutlinedSvg from '@ant-design/icons-svg/es/asn/DoubleLeftOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-double-left-outlined')
export default class DoubleLeftOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'DoubleLeftOutlined';
  static tagName = 'o-double-left-outlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={DoubleLeftOutlinedSvg} />;
  };
}