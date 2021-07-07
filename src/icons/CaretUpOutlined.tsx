// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import CaretUpOutlinedSvg from '@ant-design/icons-svg/lib/asn/CaretUpOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-caret-up-outlined')
export default class CaretUpOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'CaretUpOutlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={CaretUpOutlinedSvg} />;
  };
}