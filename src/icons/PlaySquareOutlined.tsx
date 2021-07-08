// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import PlaySquareOutlinedSvg from '@ant-design/icons-svg/es/asn/PlaySquareOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-play-square-outlined')
export default class PlaySquareOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'PlaySquareOutlined';
  static tagName = 'o-play-square-outlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={PlaySquareOutlinedSvg} />;
  };
}