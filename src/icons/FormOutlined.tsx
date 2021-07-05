// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import FormOutlinedSvg from '@ant-design/icons-svg/lib/asn/FormOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-form-outlined')
export default class FormOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'FormOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={FormOutlinedSvg}></AntdIcon>;
  };
}