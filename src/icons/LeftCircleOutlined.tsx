// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import LeftCircleOutlinedSvg from '@ant-design/icons-svg/es/asn/LeftCircleOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-left-circle-outlined')
export default class LeftCircleOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'LeftCircleOutlined';
  static tagName = 'o-left-circle-outlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={LeftCircleOutlinedSvg} />;
  };
}