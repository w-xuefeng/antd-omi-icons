// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import CopyOutlinedSvg from '@ant-design/icons-svg/es/asn/CopyOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-copy-outlined')
export default class CopyOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'CopyOutlined';
  static tagName = 'o-copy-outlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={CopyOutlinedSvg} />;
  };
}