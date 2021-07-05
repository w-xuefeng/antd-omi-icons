// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import YahooOutlinedSvg from '@ant-design/icons-svg/lib/asn/YahooOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-yahoo-outlined')
export default class YahooOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'YahooOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={YahooOutlinedSvg}></AntdIcon>;
  };
}