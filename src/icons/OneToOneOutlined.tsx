// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import OneToOneOutlinedSvg from '@ant-design/icons-svg/lib/asn/OneToOneOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-one-to-one-outlined')
export default class OneToOneOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'OneToOneOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={OneToOneOutlinedSvg}></AntdIcon>;
  };
}