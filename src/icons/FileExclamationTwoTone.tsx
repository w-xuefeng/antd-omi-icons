// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import FileExclamationTwoToneSvg from '@ant-design/icons-svg/lib/asn/FileExclamationTwoTone';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-file-exclamation-two-tone')
export default class FileExclamationTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'FileExclamationTwoTone';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={FileExclamationTwoToneSvg} />;
  };
}