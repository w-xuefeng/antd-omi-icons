// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import CodepenSquareFilledSvg from '@ant-design/icons-svg/es/asn/CodepenSquareFilled';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-codepen-square-filled')
export default class CodepenSquareFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'CodepenSquareFilled';
  static tagName = 'o-codepen-square-filled';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={CodepenSquareFilledSvg} />;
  };
}