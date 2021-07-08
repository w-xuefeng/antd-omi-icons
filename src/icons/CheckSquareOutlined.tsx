// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import CheckSquareOutlinedSvg from '@ant-design/icons-svg/es/asn/CheckSquareOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-check-square-outlined')
export default class CheckSquareOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'CheckSquareOutlined';
  static tagName = 'o-check-square-outlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={CheckSquareOutlinedSvg} />;
  };
}