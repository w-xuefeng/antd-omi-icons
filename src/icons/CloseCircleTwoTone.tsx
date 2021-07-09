// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

const CloseCircleTwoToneSvg = {"name":"close-circle","theme":"twotone"};

@tag('o-close-circle-two-tone')
export default class CloseCircleTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'CloseCircleTwoTone';
  static tagName = 'o-close-circle-two-tone';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={CloseCircleTwoToneSvg} />;
  };
}