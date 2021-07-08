// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import RightCircleOutlinedSvg from '@ant-design/icons-svg/es/asn/RightCircleOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-right-circle-outlined')
export default class RightCircleOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'RightCircleOutlined';
  static tagName = 'o-right-circle-outlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={RightCircleOutlinedSvg} />;
  };
}