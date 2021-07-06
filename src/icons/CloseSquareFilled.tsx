// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import CloseSquareFilledSvg from '@ant-design/icons-svg/lib/asn/CloseSquareFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-close-square-filled')
export default class CloseSquareFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'CloseSquareFilled';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={CloseSquareFilledSvg}></AntdIcon>;
  };
}