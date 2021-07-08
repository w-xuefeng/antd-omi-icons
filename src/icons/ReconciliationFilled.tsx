// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import ReconciliationFilledSvg from '@ant-design/icons-svg/es/asn/ReconciliationFilled';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-reconciliation-filled')
export default class ReconciliationFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'ReconciliationFilled';
  static tagName = 'o-reconciliation-filled';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={ReconciliationFilledSvg} />;
  };
}