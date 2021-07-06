// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import SketchSquareFilledSvg from '@ant-design/icons-svg/lib/asn/SketchSquareFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-sketch-square-filled')
export default class SketchSquareFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'SketchSquareFilled';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={SketchSquareFilledSvg}></AntdIcon>;
  };
}