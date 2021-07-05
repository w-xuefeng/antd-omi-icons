// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import MediumOutlinedSvg from '@ant-design/icons-svg/lib/asn/MediumOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-medium-outlined')
export default class MediumOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'MediumOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={MediumOutlinedSvg}></AntdIcon>;
  };
}