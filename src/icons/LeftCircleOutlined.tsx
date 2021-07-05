// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import LeftCircleOutlinedSvg from '@ant-design/icons-svg/lib/asn/LeftCircleOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-left-circle-outlined')
export default class LeftCircleOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'LeftCircleOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={LeftCircleOutlinedSvg}></AntdIcon>;
  };
}