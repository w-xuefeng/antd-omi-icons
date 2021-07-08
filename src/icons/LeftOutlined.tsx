// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import LeftOutlinedSvg from '@ant-design/icons-svg/es/asn/LeftOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-left-outlined')
export default class LeftOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'LeftOutlined';
  static tagName = 'o-left-outlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={LeftOutlinedSvg} />;
  };
}