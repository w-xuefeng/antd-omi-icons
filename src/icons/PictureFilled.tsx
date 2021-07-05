// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import PictureFilledSvg from '@ant-design/icons-svg/lib/asn/PictureFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-picture-filled')
export default class PictureFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'PictureFilled';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={PictureFilledSvg}></AntdIcon>;
  };
}