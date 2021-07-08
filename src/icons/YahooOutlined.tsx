// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import YahooOutlinedSvg from '@ant-design/icons-svg/es/asn/YahooOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-yahoo-outlined')
export default class YahooOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'YahooOutlined';
  static tagName = 'o-yahoo-outlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={YahooOutlinedSvg} />;
  };
}