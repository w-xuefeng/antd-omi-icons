// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import SketchCircleFilledSvg from '@ant-design/icons-svg/es/asn/SketchCircleFilled';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-sketch-circle-filled')
export default class SketchCircleFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'SketchCircleFilled';
  static tagName = 'o-sketch-circle-filled';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={SketchCircleFilledSvg} />;
  };
}