// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import PictureFilledSvg from '@ant-design/icons-svg/es/asn/PictureFilled';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-picture-filled')
export default class PictureFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'PictureFilled';
  static tagName = 'o-picture-filled';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={PictureFilledSvg} />;
  };
}