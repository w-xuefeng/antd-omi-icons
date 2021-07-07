// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import CaretRightOutlinedSvg from '@ant-design/icons-svg/lib/asn/CaretRightOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-caret-right-outlined')
export default class CaretRightOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'CaretRightOutlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={CaretRightOutlinedSvg} />;
  };
}