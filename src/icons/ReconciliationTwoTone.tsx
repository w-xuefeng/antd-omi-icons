// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import ReconciliationTwoToneSvg from '@ant-design/icons-svg/lib/asn/ReconciliationTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-reconciliation-two-tone')
export default class ReconciliationTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'ReconciliationTwoTone';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={ReconciliationTwoToneSvg}></AntdIcon>;
  };
}