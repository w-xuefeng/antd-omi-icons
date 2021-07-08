// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import PlayCircleFilledSvg from '@ant-design/icons-svg/es/asn/PlayCircleFilled';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-play-circle-filled')
export default class PlayCircleFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'PlayCircleFilled';
  static tagName = 'o-play-circle-filled';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={PlayCircleFilledSvg} />;
  };
}