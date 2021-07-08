// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import YahooFilledSvg from '@ant-design/icons-svg/es/asn/YahooFilled';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-yahoo-filled')
export default class YahooFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'YahooFilled';
  static tagName = 'o-yahoo-filled';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={YahooFilledSvg} />;
  };
}