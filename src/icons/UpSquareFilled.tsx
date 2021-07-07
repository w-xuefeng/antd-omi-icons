// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import UpSquareFilledSvg from '@ant-design/icons-svg/lib/asn/UpSquareFilled';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-up-square-filled')
export default class UpSquareFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'UpSquareFilled';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={UpSquareFilledSvg} />;
  };
}