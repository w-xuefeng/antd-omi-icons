// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import PlayCircleOutlinedSvg from '@ant-design/icons-svg/es/asn/PlayCircleOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-play-circle-outlined')
export default class PlayCircleOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'PlayCircleOutlined';
  static tagName = 'o-play-circle-outlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={PlayCircleOutlinedSvg} />;
  };
}