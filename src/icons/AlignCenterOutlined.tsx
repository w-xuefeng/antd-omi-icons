// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import AlignCenterOutlinedSvg from '@ant-design/icons-svg/lib/asn/AlignCenterOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-align-center-outlined')
export default class AlignCenterOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'AlignCenterOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={AlignCenterOutlinedSvg}></AntdIcon>;
  };
}