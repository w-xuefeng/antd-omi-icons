// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

const PoundCircleTwoToneSvg = {"name":"pound-circle","theme":"twotone"};

@tag('o-pound-circle-two-tone')
export default class PoundCircleTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'PoundCircleTwoTone';
  static tagName = 'o-pound-circle-two-tone';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={PoundCircleTwoToneSvg} />;
  };
}