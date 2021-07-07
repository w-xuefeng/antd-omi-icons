// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import MinusSquareFilledSvg from '@ant-design/icons-svg/lib/asn/MinusSquareFilled';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-minus-square-filled')
export default class MinusSquareFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'MinusSquareFilled';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={MinusSquareFilledSvg} />;
  };
}