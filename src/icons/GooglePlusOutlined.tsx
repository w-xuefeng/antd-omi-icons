// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import GooglePlusOutlinedSvg from '@ant-design/icons-svg/es/asn/GooglePlusOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-google-plus-outlined')
export default class GooglePlusOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'GooglePlusOutlined';
  static tagName = 'o-google-plus-outlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={GooglePlusOutlinedSvg} />;
  };
}