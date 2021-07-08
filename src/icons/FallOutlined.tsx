// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import FallOutlinedSvg from '@ant-design/icons-svg/es/asn/FallOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-fall-outlined')
export default class FallOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'FallOutlined';
  static tagName = 'o-fall-outlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={FallOutlinedSvg} />;
  };
}