// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import YahooFilledSvg from '@ant-design/icons-svg/lib/asn/YahooFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-yahoo-filled')
export default class YahooFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'YahooFilled';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={YahooFilledSvg}></AntdIcon>;
  };
}