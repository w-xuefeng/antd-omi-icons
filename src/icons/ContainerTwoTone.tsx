// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

const ContainerTwoToneSvg = {"name":"container","theme":"twotone"};

@tag('o-container-two-tone')
export default class ContainerTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'ContainerTwoTone';
  static tagName = 'o-container-two-tone';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={ContainerTwoToneSvg} />;
  };
}