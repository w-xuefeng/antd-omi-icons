// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import PicRightOutlinedSvg from '@ant-design/icons-svg/es/asn/PicRightOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-pic-right-outlined')
export default class PicRightOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'PicRightOutlined';
  static tagName = 'o-pic-right-outlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={PicRightOutlinedSvg} />;
  };
}