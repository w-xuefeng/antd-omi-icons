// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import YoutubeOutlinedSvg from '@ant-design/icons-svg/lib/asn/YoutubeOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-youtube-outlined')
export default class YoutubeOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'YoutubeOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={YoutubeOutlinedSvg}></AntdIcon>;
  };
}