// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import ReconciliationTwoToneSvg from '@ant-design/icons-svg/es/asn/ReconciliationTwoTone';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-reconciliation-two-tone')
export default class ReconciliationTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'ReconciliationTwoTone';
  static tagName = 'o-reconciliation-two-tone';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={ReconciliationTwoToneSvg} />;
  };
}