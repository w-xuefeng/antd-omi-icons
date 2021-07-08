// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import PlusSquareFilledSvg from '@ant-design/icons-svg/es/asn/PlusSquareFilled';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-plus-square-filled')
export default class PlusSquareFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'PlusSquareFilled';
  static tagName = 'o-plus-square-filled';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={PlusSquareFilledSvg} />;
  };
}