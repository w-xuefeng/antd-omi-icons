// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

const CarTwoToneSvg = {"name":"car","theme":"twotone"};

@tag('o-car-two-tone')
export default class CarTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'CarTwoTone';
  static tagName = 'o-car-two-tone';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={CarTwoToneSvg} />;
  };
}