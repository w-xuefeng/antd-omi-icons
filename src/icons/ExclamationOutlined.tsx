// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import ExclamationOutlinedSvg from '@ant-design/icons-svg/lib/asn/ExclamationOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-exclamation-outlined')
export default class ExclamationOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'ExclamationOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={ExclamationOutlinedSvg}></AntdIcon>;
  };
}