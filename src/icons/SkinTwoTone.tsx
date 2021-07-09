// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

const SkinTwoToneSvg = {"name":"skin","theme":"twotone"};

@tag('o-skin-two-tone')
export default class SkinTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'SkinTwoTone';
  static tagName = 'o-skin-two-tone';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={SkinTwoToneSvg} />;
  };
}