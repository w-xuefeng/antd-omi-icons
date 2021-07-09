// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

const EyeTwoToneSvg = {"name":"eye","theme":"twotone"};

@tag('o-eye-two-tone')
export default class EyeTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'EyeTwoTone';
  static tagName = 'o-eye-two-tone';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={EyeTwoToneSvg} />;
  };
}