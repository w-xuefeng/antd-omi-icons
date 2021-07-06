// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import UpSquareFilledSvg from '@ant-design/icons-svg/lib/asn/UpSquareFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-up-square-filled')
export default class UpSquareFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'UpSquareFilled';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={UpSquareFilledSvg}></AntdIcon>;
  };
}