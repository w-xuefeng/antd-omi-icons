// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import ChromeOutlinedSvg from '@ant-design/icons-svg/es/asn/ChromeOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-chrome-outlined')
export default class ChromeOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'ChromeOutlined';
  static tagName = 'o-chrome-outlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={ChromeOutlinedSvg} />;
  };
}