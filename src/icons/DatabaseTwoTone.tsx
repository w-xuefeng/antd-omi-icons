// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

const DatabaseTwoToneSvg = {"name":"database","theme":"twotone"};

@tag('o-database-two-tone')
export default class DatabaseTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'DatabaseTwoTone';
  static tagName = 'o-database-two-tone';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={DatabaseTwoToneSvg} />;
  };
}