// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import ApiFilledSvg from '@ant-design/icons-svg/lib/asn/ApiFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-api-filled')
export default class ApiFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'ApiFilled';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={ApiFilledSvg}></AntdIcon>;
  };
}