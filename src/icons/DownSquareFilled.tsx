// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import DownSquareFilledSvg from '@ant-design/icons-svg/es/asn/DownSquareFilled';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-down-square-filled')
export default class DownSquareFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'DownSquareFilled';
  static tagName = 'o-down-square-filled';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={DownSquareFilledSvg} />;
  };
}