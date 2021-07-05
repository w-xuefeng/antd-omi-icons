// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import MediumWorkmarkOutlinedSvg from '@ant-design/icons-svg/lib/asn/MediumWorkmarkOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-medium-workmark-outlined')
export default class MediumWorkmarkOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'MediumWorkmarkOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={MediumWorkmarkOutlinedSvg}></AntdIcon>;
  };
}