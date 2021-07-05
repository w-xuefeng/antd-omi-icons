// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import FacebookFilledSvg from '@ant-design/icons-svg/lib/asn/FacebookFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-facebook-filled')
export default class FacebookFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'FacebookFilled';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={FacebookFilledSvg}></AntdIcon>;
  };
}