// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import ReconciliationFilledSvg from '@ant-design/icons-svg/lib/asn/ReconciliationFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-reconciliation-filled')
export default class ReconciliationFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'ReconciliationFilled';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={ReconciliationFilledSvg}></AntdIcon>;
  };
}