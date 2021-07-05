// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import ArrowsAltOutlinedSvg from '@ant-design/icons-svg/lib/asn/ArrowsAltOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-arrows-alt-outlined')
export default class ArrowsAltOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'ArrowsAltOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={ArrowsAltOutlinedSvg}></AntdIcon>;
  };
}