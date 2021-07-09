// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

const FilePptTwoToneSvg = {"name":"file-ppt","theme":"twotone"};

@tag('o-file-ppt-two-tone')
export default class FilePptTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'FilePptTwoTone';
  static tagName = 'o-file-ppt-two-tone';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={FilePptTwoToneSvg} />;
  };
}