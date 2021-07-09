// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

const SaveTwoToneSvg = {"name":"save","theme":"twotone"};

@tag('o-save-two-tone')
export default class SaveTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'SaveTwoTone';
  static tagName = 'o-save-two-tone';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={SaveTwoToneSvg} />;
  };
}