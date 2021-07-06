// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import ReconciliationOutlinedSvg from '@ant-design/icons-svg/lib/asn/ReconciliationOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-reconciliation-outlined')
export default class ReconciliationOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'ReconciliationOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={ReconciliationOutlinedSvg}></AntdIcon>;
  };
}