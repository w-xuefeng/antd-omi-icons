// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import FireOutlinedSvg from '@ant-design/icons-svg/es/asn/FireOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-fire-outlined')
export default class FireOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'FireOutlined';
  static tagName = 'o-fire-outlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={FireOutlinedSvg} />;
  };
}