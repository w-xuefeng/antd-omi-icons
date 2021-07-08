// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import QqSquareFilledSvg from '@ant-design/icons-svg/es/asn/QqSquareFilled';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-qq-square-filled')
export default class QqSquareFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'QqSquareFilled';
  static tagName = 'o-qq-square-filled';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={QqSquareFilledSvg} />;
  };
}