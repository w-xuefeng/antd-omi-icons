// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import CompressOutlinedSvg from '@ant-design/icons-svg/lib/asn/CompressOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-compress-outlined')
export default class CompressOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'CompressOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={CompressOutlinedSvg}></AntdIcon>;
  };
}