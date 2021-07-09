// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

const CiTwoToneSvg = {"name":"ci","theme":"twotone"};

@tag('o-ci-two-tone')
export default class CiTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'CiTwoTone';
  static tagName = 'o-ci-two-tone';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={CiTwoToneSvg} />;
  };
}