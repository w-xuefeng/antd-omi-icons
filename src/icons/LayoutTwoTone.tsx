// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

const LayoutTwoToneSvg = {"name":"layout","theme":"twotone"};

@tag('o-layout-two-tone')
export default class LayoutTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'LayoutTwoTone';
  static tagName = 'o-layout-two-tone';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={LayoutTwoToneSvg} />;
  };
}