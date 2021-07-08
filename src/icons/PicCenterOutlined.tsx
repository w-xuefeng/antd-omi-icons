// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import PicCenterOutlinedSvg from '@ant-design/icons-svg/es/asn/PicCenterOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-pic-center-outlined')
export default class PicCenterOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'PicCenterOutlined';
  static tagName = 'o-pic-center-outlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={PicCenterOutlinedSvg} />;
  };
}