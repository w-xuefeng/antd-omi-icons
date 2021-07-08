// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import ReadOutlinedSvg from '@ant-design/icons-svg/es/asn/ReadOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-read-outlined')
export default class ReadOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'ReadOutlined';
  static tagName = 'o-read-outlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={ReadOutlinedSvg} />;
  };
}