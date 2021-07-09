// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

const ExperimentTwoToneSvg = {"name":"experiment","theme":"twotone"};

@tag('o-experiment-two-tone')
export default class ExperimentTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'ExperimentTwoTone';
  static tagName = 'o-experiment-two-tone';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={ExperimentTwoToneSvg} />;
  };
}