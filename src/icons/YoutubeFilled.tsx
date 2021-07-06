// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import YoutubeFilledSvg from '@ant-design/icons-svg/lib/asn/YoutubeFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-youtube-filled')
export default class YoutubeFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'YoutubeFilled';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={YoutubeFilledSvg}></AntdIcon>;
  };
}