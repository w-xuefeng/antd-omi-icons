// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import MoreOutlinedSvg from '@ant-design/icons-svg/lib/asn/MoreOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-more-outlined')
export default class MoreOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'MoreOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={MoreOutlinedSvg}></AntdIcon>;
  };
}