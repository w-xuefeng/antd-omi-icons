// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import HddOutlinedSvg from '@ant-design/icons-svg/lib/asn/HddOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-hdd-outlined')
export default class HddOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'HddOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={HddOutlinedSvg}></AntdIcon>;
  };
}