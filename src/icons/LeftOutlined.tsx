// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import LeftOutlinedSvg from '@ant-design/icons-svg/lib/asn/LeftOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-left-outlined')
export default class LeftOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'LeftOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={LeftOutlinedSvg}></AntdIcon>;
  };
}