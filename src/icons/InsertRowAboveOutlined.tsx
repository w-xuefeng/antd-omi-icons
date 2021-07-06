// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import InsertRowAboveOutlinedSvg from '@ant-design/icons-svg/lib/asn/InsertRowAboveOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-insert-row-above-outlined')
export default class InsertRowAboveOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'InsertRowAboveOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={InsertRowAboveOutlinedSvg}></AntdIcon>;
  };
}