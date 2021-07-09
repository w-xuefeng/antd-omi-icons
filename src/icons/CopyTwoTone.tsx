// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

const CopyTwoToneSvg = {"name":"copy","theme":"twotone"};

@tag('o-copy-two-tone')
export default class CopyTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'CopyTwoTone';
  static tagName = 'o-copy-two-tone';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={CopyTwoToneSvg} />;
  };
}