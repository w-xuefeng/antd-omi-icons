// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import FileTextTwoToneSvg from '@ant-design/icons-svg/es/asn/FileTextTwoTone';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-file-text-two-tone')
export default class FileTextTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'FileTextTwoTone';
  static tagName = 'o-file-text-two-tone';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={FileTextTwoToneSvg} />;
  };
}