// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import DislikeOutlinedSvg from '@ant-design/icons-svg/lib/asn/DislikeOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-dislike-outlined')
export default class DislikeOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'DislikeOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={DislikeOutlinedSvg}></AntdIcon>;
  };
}