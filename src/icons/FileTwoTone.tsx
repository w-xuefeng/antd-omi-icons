// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

const FileTwoToneSvg = {"name":"file","theme":"twotone"};

@tag('o-file-two-tone')
export default class FileTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'FileTwoTone';
  static tagName = 'o-file-two-tone';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={FileTwoToneSvg} />;
  };
}