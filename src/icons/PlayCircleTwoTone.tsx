// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import PlayCircleTwoToneSvg from '@ant-design/icons-svg/lib/asn/PlayCircleTwoTone';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-play-circle-two-tone')
export default class PlayCircleTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'PlayCircleTwoTone';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={PlayCircleTwoToneSvg} />;
  };
}