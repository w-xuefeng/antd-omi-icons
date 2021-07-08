// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import FolderOpenTwoToneSvg from '@ant-design/icons-svg/es/asn/FolderOpenTwoTone';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-folder-open-two-tone')
export default class FolderOpenTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'FolderOpenTwoTone';
  static tagName = 'o-folder-open-two-tone';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={FolderOpenTwoToneSvg} />;
  };
}