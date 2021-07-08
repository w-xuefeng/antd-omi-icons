// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import IeOutlinedSvg from '@ant-design/icons-svg/es/asn/IeOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-ie-outlined')
export default class IeOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'IeOutlined';
  static tagName = 'o-ie-outlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={IeOutlinedSvg} />;
  };
}