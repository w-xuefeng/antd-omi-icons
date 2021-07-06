// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import DragOutlinedSvg from '@ant-design/icons-svg/lib/asn/DragOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-drag-outlined')
export default class DragOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'DragOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={DragOutlinedSvg}></AntdIcon>;
  };
}