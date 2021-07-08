// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import RotateRightOutlinedSvg from '@ant-design/icons-svg/es/asn/RotateRightOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-rotate-right-outlined')
export default class RotateRightOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'RotateRightOutlined';
  static tagName = 'o-rotate-right-outlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={RotateRightOutlinedSvg} />;
  };
}