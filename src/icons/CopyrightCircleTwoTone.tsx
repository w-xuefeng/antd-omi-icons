// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

const CopyrightCircleTwoToneSvg = {"name":"copyright-circle","theme":"twotone"};

@tag('o-copyright-circle-two-tone')
export default class CopyrightCircleTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'CopyrightCircleTwoTone';
  static tagName = 'o-copyright-circle-two-tone';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={CopyrightCircleTwoToneSvg} />;
  };
}