// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import IdcardOutlinedSvg from '@ant-design/icons-svg/lib/asn/IdcardOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-idcard-outlined')
export default class IdcardOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'IdcardOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={IdcardOutlinedSvg}></AntdIcon>;
  };
}