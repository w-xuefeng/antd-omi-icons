// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import UpOutlinedSvg from '@ant-design/icons-svg/lib/asn/UpOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-up-outlined')
export default class UpOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'UpOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={UpOutlinedSvg}></AntdIcon>;
  };
}