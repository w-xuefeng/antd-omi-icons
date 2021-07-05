// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import InsertRowBelowOutlinedSvg from '@ant-design/icons-svg/lib/asn/InsertRowBelowOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-insert-row-below-outlined')
export default class InsertRowBelowOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'InsertRowBelowOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={InsertRowBelowOutlinedSvg}></AntdIcon>;
  };
}