// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import DeliveredProcedureOutlinedSvg from '@ant-design/icons-svg/es/asn/DeliveredProcedureOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-delivered-procedure-outlined')
export default class DeliveredProcedureOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'DeliveredProcedureOutlined';
  static tagName = 'o-delivered-procedure-outlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={DeliveredProcedureOutlinedSvg} />;
  };
}