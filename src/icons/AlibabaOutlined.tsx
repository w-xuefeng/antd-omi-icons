// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import AlibabaOutlinedSvg from '@ant-design/icons-svg/lib/asn/AlibabaOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-alibaba-outlined')
export default class AlibabaOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'AlibabaOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={AlibabaOutlinedSvg}></AntdIcon>;
  };
}