// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import AlipayOutlinedSvg from '@ant-design/icons-svg/lib/asn/AlipayOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-alipay-outlined')
export default class AlipayOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'AlipayOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={AlipayOutlinedSvg}></AntdIcon>;
  };
}