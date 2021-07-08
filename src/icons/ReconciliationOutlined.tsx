// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import ReconciliationOutlinedSvg from '@ant-design/icons-svg/es/asn/ReconciliationOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-reconciliation-outlined')
export default class ReconciliationOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'ReconciliationOutlined';
  static tagName = 'o-reconciliation-outlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={ReconciliationOutlinedSvg} />;
  };
}