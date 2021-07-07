// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import LeftSquareFilledSvg from '@ant-design/icons-svg/lib/asn/LeftSquareFilled';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-left-square-filled')
export default class LeftSquareFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'LeftSquareFilled';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={LeftSquareFilledSvg} />;
  };
}