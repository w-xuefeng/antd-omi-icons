// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import ShareAltOutlinedSvg from '@ant-design/icons-svg/lib/asn/ShareAltOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-share-alt-outlined')
export default class ShareAltOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'ShareAltOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={ShareAltOutlinedSvg}></AntdIcon>;
  };
}