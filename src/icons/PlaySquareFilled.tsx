// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import PlaySquareFilledSvg from '@ant-design/icons-svg/lib/asn/PlaySquareFilled';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-play-square-filled')
export default class PlaySquareFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'PlaySquareFilled';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={PlaySquareFilledSvg} />;
  };
}