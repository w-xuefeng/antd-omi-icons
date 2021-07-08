// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import SketchOutlinedSvg from '@ant-design/icons-svg/es/asn/SketchOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-sketch-outlined')
export default class SketchOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'SketchOutlined';
  static tagName = 'o-sketch-outlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={SketchOutlinedSvg} />;
  };
}