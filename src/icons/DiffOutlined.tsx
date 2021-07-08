// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import DiffOutlinedSvg from '@ant-design/icons-svg/es/asn/DiffOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-diff-outlined')
export default class DiffOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'DiffOutlined';
  static tagName = 'o-diff-outlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={DiffOutlinedSvg} />;
  };
}