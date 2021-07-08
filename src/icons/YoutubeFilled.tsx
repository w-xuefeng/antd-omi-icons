// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import YoutubeFilledSvg from '@ant-design/icons-svg/es/asn/YoutubeFilled';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-youtube-filled')
export default class YoutubeFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'YoutubeFilled';
  static tagName = 'o-youtube-filled';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={YoutubeFilledSvg} />;
  };
}