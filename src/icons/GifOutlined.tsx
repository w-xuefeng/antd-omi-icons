// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import GifOutlinedSvg from '@ant-design/icons-svg/lib/asn/GifOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-gif-outlined')
export default class GifOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'GifOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={GifOutlinedSvg}></AntdIcon>;
  };
}