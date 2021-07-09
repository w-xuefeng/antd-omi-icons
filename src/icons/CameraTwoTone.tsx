// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

const CameraTwoToneSvg = {"name":"camera","theme":"twotone"};

@tag('o-camera-two-tone')
export default class CameraTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'CameraTwoTone';
  static tagName = 'o-camera-two-tone';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={CameraTwoToneSvg} />;
  };
}