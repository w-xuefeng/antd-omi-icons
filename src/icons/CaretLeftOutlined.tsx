// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import CaretLeftOutlinedSvg from '@ant-design/icons-svg/es/asn/CaretLeftOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-caret-left-outlined')
export default class CaretLeftOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'CaretLeftOutlined';
  static tagName = 'o-caret-left-outlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={CaretLeftOutlinedSvg} />;
  };
}