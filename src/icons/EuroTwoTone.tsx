// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

const EuroTwoToneSvg = {"name":"euro","theme":"twotone"};

@tag('o-euro-two-tone')
export default class EuroTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'EuroTwoTone';
  static tagName = 'o-euro-two-tone';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={EuroTwoToneSvg} />;
  };
}