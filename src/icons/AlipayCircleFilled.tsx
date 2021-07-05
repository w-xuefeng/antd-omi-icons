// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import AlipayCircleFilledSvg from '@ant-design/icons-svg/lib/asn/AlipayCircleFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-alipay-circle-filled')
export default class AlipayCircleFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'AlipayCircleFilled';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={AlipayCircleFilledSvg}></AntdIcon>;
  };
}