// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import ExceptionOutlinedSvg from '@ant-design/icons-svg/lib/asn/ExceptionOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-exception-outlined')
export default class ExceptionOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'ExceptionOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={ExceptionOutlinedSvg}></AntdIcon>;
  };
}