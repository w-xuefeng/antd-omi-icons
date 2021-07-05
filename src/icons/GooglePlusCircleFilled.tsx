// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import GooglePlusCircleFilledSvg from '@ant-design/icons-svg/lib/asn/GooglePlusCircleFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-google-plus-circle-filled')
export default class GooglePlusCircleFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'GooglePlusCircleFilled';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={GooglePlusCircleFilledSvg}></AntdIcon>;
  };
}