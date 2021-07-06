// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import QqSquareFilledSvg from '@ant-design/icons-svg/lib/asn/QqSquareFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-qq-square-filled')
export default class QqSquareFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'QqSquareFilled';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={QqSquareFilledSvg}></AntdIcon>;
  };
}