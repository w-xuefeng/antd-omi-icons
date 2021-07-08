// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import CheckCircleOutlinedSvg from '@ant-design/icons-svg/es/asn/CheckCircleOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-check-circle-outlined')
export default class CheckCircleOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'CheckCircleOutlined';
  static tagName = 'o-check-circle-outlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={CheckCircleOutlinedSvg} />;
  };
}