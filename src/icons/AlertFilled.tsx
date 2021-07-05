// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import AlertFilledSvg from '@ant-design/icons-svg/lib/asn/AlertFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-alert-filled')
export default class AlertFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'AlertFilled';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={AlertFilledSvg}></AntdIcon>;
  };
}