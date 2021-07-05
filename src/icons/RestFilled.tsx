// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import RestFilledSvg from '@ant-design/icons-svg/lib/asn/RestFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-rest-filled')
export default class RestFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'RestFilled';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={RestFilledSvg}></AntdIcon>;
  };
}