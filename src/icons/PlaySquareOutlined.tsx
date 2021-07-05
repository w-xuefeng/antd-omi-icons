// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import PlaySquareOutlinedSvg from '@ant-design/icons-svg/lib/asn/PlaySquareOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-play-square-outlined')
export default class PlaySquareOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'PlaySquareOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={PlaySquareOutlinedSvg}></AntdIcon>;
  };
}