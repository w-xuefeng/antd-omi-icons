// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import YoutubeOutlinedSvg from '@ant-design/icons-svg/lib/asn/YoutubeOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-youtube-outlined')
export default class YoutubeOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'YoutubeOutlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={YoutubeOutlinedSvg} />;
  };
}