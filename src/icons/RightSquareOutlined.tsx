// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import RightSquareOutlinedSvg from '@ant-design/icons-svg/es/asn/RightSquareOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-right-square-outlined')
export default class RightSquareOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'RightSquareOutlined';
  static tagName = 'o-right-square-outlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={RightSquareOutlinedSvg} />;
  };
}