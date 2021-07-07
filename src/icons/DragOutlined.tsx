// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import DragOutlinedSvg from '@ant-design/icons-svg/lib/asn/DragOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-drag-outlined')
export default class DragOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'DragOutlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={DragOutlinedSvg} />;
  };
}