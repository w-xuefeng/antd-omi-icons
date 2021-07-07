// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import PlaySquareTwoToneSvg from '@ant-design/icons-svg/lib/asn/PlaySquareTwoTone';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-play-square-two-tone')
export default class PlaySquareTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'PlaySquareTwoTone';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={PlaySquareTwoToneSvg} />;
  };
}