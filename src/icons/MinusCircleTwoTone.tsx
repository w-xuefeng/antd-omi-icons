// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

const MinusCircleTwoToneSvg = {"name":"minus-circle","theme":"twotone"};

@tag('o-minus-circle-two-tone')
export default class MinusCircleTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'MinusCircleTwoTone';
  static tagName = 'o-minus-circle-two-tone';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={MinusCircleTwoToneSvg} />;
  };
}