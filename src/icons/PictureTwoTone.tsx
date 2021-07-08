// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import PictureTwoToneSvg from '@ant-design/icons-svg/es/asn/PictureTwoTone';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-picture-two-tone')
export default class PictureTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'PictureTwoTone';
  static tagName = 'o-picture-two-tone';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={PictureTwoToneSvg} />;
  };
}