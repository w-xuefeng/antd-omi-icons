// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import PicCenterOutlinedSvg from '@ant-design/icons-svg/lib/asn/PicCenterOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-pic-center-outlined')
export default class PicCenterOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'PicCenterOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={PicCenterOutlinedSvg}></AntdIcon>;
  };
}