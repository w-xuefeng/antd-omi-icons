// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import CoffeeOutlinedSvg from '@ant-design/icons-svg/lib/asn/CoffeeOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-coffee-outlined')
export default class CoffeeOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'CoffeeOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={CoffeeOutlinedSvg}></AntdIcon>;
  };
}