// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import PayCircleFilledSvg from '@ant-design/icons-svg/lib/asn/PayCircleFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-pay-circle-filled')
export default class PayCircleFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'PayCircleFilled';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={PayCircleFilledSvg}></AntdIcon>;
  };
}