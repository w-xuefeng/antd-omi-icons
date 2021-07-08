// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import HeartOutlinedSvg from '@ant-design/icons-svg/es/asn/HeartOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-heart-outlined')
export default class HeartOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'HeartOutlined';
  static tagName = 'o-heart-outlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={HeartOutlinedSvg} />;
  };
}