// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import AndroidOutlinedSvg from '@ant-design/icons-svg/es/asn/AndroidOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-android-outlined')
export default class AndroidOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'AndroidOutlined';
  static tagName = 'o-android-outlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={AndroidOutlinedSvg} />;
  };
}