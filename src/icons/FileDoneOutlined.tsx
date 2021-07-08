// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import FileDoneOutlinedSvg from '@ant-design/icons-svg/es/asn/FileDoneOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-file-done-outlined')
export default class FileDoneOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'FileDoneOutlined';
  static tagName = 'o-file-done-outlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={FileDoneOutlinedSvg} />;
  };
}