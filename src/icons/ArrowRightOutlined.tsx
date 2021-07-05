// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import ArrowRightOutlinedSvg from '@ant-design/icons-svg/lib/asn/ArrowRightOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-arrow-right-outlined')
export default class ArrowRightOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'ArrowRightOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={ArrowRightOutlinedSvg}></AntdIcon>;
  };
}