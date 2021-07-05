// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import CopyOutlinedSvg from '@ant-design/icons-svg/lib/asn/CopyOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-copy-outlined')
export default class CopyOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'CopyOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={CopyOutlinedSvg}></AntdIcon>;
  };
}