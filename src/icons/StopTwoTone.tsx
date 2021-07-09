// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

const StopTwoToneSvg = {"name":"stop","theme":"twotone"};

@tag('o-stop-two-tone')
export default class StopTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'StopTwoTone';
  static tagName = 'o-stop-two-tone';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={StopTwoToneSvg} />;
  };
}