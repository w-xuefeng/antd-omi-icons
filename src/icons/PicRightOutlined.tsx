// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import PicRightOutlinedSvg from '@ant-design/icons-svg/lib/asn/PicRightOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-pic-right-outlined')
export default class PicRightOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'PicRightOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={PicRightOutlinedSvg}></AntdIcon>;
  };
}