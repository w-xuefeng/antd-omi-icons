// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import SketchCircleFilledSvg from '@ant-design/icons-svg/lib/asn/SketchCircleFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-sketch-circle-filled')
export default class SketchCircleFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'SketchCircleFilled';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={SketchCircleFilledSvg}></AntdIcon>;
  };
}