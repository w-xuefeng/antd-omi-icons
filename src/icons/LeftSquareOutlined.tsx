// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import LeftSquareOutlinedSvg from '@ant-design/icons-svg/es/asn/LeftSquareOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-left-square-outlined')
export default class LeftSquareOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'LeftSquareOutlined';
  static tagName = 'o-left-square-outlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={LeftSquareOutlinedSvg} />;
  };
}