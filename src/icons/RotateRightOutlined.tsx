// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import RotateRightOutlinedSvg from '@ant-design/icons-svg/lib/asn/RotateRightOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-rotate-right-outlined')
export default class RotateRightOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'RotateRightOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={RotateRightOutlinedSvg}></AntdIcon>;
  };
}