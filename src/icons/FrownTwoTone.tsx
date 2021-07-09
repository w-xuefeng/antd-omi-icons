// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

const FrownTwoToneSvg = {"name":"frown","theme":"twotone"};

@tag('o-frown-two-tone')
export default class FrownTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'FrownTwoTone';
  static tagName = 'o-frown-two-tone';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={FrownTwoToneSvg} />;
  };
}