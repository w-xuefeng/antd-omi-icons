// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import InsertRowRightOutlinedSvg from '@ant-design/icons-svg/lib/asn/InsertRowRightOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-insert-row-right-outlined')
export default class InsertRowRightOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'InsertRowRightOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={InsertRowRightOutlinedSvg}></AntdIcon>;
  };
}