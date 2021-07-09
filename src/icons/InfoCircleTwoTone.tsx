// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

const InfoCircleTwoToneSvg = {"name":"info-circle","theme":"twotone"};

@tag('o-info-circle-two-tone')
export default class InfoCircleTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'InfoCircleTwoTone';
  static tagName = 'o-info-circle-two-tone';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={InfoCircleTwoToneSvg} />;
  };
}