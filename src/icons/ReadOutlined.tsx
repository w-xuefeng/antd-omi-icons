// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import ReadOutlinedSvg from '@ant-design/icons-svg/lib/asn/ReadOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-read-outlined')
export default class ReadOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'ReadOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={ReadOutlinedSvg}></AntdIcon>;
  };
}