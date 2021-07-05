// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import RightOutlinedSvg from '@ant-design/icons-svg/lib/asn/RightOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-right-outlined')
export default class RightOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'RightOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={RightOutlinedSvg}></AntdIcon>;
  };
}