// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import PlaySquareFilledSvg from '@ant-design/icons-svg/lib/asn/PlaySquareFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-play-square-filled')
export default class PlaySquareFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'PlaySquareFilled';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={PlaySquareFilledSvg}></AntdIcon>;
  };
}