// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import PictureOutlinedSvg from '@ant-design/icons-svg/lib/asn/PictureOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-picture-outlined')
export default class PictureOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'PictureOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={PictureOutlinedSvg}></AntdIcon>;
  };
}