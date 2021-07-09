// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

const MobileTwoToneSvg = {"name":"mobile","theme":"twotone"};

@tag('o-mobile-two-tone')
export default class MobileTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'MobileTwoTone';
  static tagName = 'o-mobile-two-tone';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={MobileTwoToneSvg} />;
  };
}