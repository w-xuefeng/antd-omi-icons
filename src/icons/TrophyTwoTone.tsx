// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

const TrophyTwoToneSvg = {"name":"trophy","theme":"twotone"};

@tag('o-trophy-two-tone')
export default class TrophyTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'TrophyTwoTone';
  static tagName = 'o-trophy-two-tone';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={TrophyTwoToneSvg} />;
  };
}