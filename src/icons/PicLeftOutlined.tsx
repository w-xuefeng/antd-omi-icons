// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import PicLeftOutlinedSvg from '@ant-design/icons-svg/es/asn/PicLeftOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-pic-left-outlined')
export default class PicLeftOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'PicLeftOutlined';
  static tagName = 'o-pic-left-outlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={PicLeftOutlinedSvg} />;
  };
}