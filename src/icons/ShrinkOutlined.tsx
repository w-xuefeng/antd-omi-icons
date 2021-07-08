// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import ShrinkOutlinedSvg from '@ant-design/icons-svg/es/asn/ShrinkOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-shrink-outlined')
export default class ShrinkOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'ShrinkOutlined';
  static tagName = 'o-shrink-outlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={ShrinkOutlinedSvg} />;
  };
}