// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import AlignCenterOutlinedSvg from '@ant-design/icons-svg/es/asn/AlignCenterOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-align-center-outlined')
export default class AlignCenterOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'AlignCenterOutlined';
  static tagName = 'o-align-center-outlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={AlignCenterOutlinedSvg} />;
  };
}