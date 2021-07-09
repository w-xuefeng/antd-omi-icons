// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

const CarryOutTwoToneSvg = {"name":"carry-out","theme":"twotone"};

@tag('o-carry-out-two-tone')
export default class CarryOutTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'CarryOutTwoTone';
  static tagName = 'o-carry-out-two-tone';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={CarryOutTwoToneSvg} />;
  };
}