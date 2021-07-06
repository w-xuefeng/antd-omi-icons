// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import SketchOutlinedSvg from '@ant-design/icons-svg/lib/asn/SketchOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-sketch-outlined')
export default class SketchOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'SketchOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={SketchOutlinedSvg}></AntdIcon>;
  };
}