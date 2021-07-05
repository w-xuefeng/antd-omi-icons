// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import DeliveredProcedureOutlinedSvg from '@ant-design/icons-svg/lib/asn/DeliveredProcedureOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-delivered-procedure-outlined')
export default class DeliveredProcedureOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'DeliveredProcedureOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={DeliveredProcedureOutlinedSvg}></AntdIcon>;
  };
}