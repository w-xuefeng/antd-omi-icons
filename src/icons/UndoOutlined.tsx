// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import UndoOutlinedSvg from '@ant-design/icons-svg/lib/asn/UndoOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-undo-outlined')
export default class UndoOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'UndoOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={UndoOutlinedSvg}></AntdIcon>;
  };
}