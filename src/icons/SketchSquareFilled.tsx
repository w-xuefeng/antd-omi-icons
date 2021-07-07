// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import SketchSquareFilledSvg from '@ant-design/icons-svg/lib/asn/SketchSquareFilled';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-sketch-square-filled')
export default class SketchSquareFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'SketchSquareFilled';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={SketchSquareFilledSvg} />;
  };
}