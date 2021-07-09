// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

const QuestionCircleTwoToneSvg = {"name":"question-circle","theme":"twotone"};

@tag('o-question-circle-two-tone')
export default class QuestionCircleTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'QuestionCircleTwoTone';
  static tagName = 'o-question-circle-two-tone';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={QuestionCircleTwoToneSvg} />;
  };
}