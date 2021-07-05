// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import FieldStringOutlinedSvg from '@ant-design/icons-svg/lib/asn/FieldStringOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-field-string-outlined')
export default class FieldStringOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'FieldStringOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={FieldStringOutlinedSvg}></AntdIcon>;
  };
}