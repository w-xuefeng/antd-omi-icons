// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import TrophyTwoToneSvg from '@ant-design/icons-svg/lib/asn/TrophyTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-trophy-two-tone')
export default class TrophyTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'TrophyTwoTone';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={TrophyTwoToneSvg}></AntdIcon>;
  };
}