// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import RightSquareFilledSvg from '@ant-design/icons-svg/lib/asn/RightSquareFilled';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-right-square-filled')
export default class RightSquareFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'RightSquareFilled';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={RightSquareFilledSvg} />;
  };
}