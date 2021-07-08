// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import PictureOutlinedSvg from '@ant-design/icons-svg/es/asn/PictureOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-picture-outlined')
export default class PictureOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'PictureOutlined';
  static tagName = 'o-picture-outlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={PictureOutlinedSvg} />;
  };
}