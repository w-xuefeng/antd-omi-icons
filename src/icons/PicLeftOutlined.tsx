// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import PicLeftOutlinedSvg from '@ant-design/icons-svg/lib/asn/PicLeftOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-pic-left-outlined')
export default class PicLeftOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'PicLeftOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={PicLeftOutlinedSvg}></AntdIcon>;
  };
}