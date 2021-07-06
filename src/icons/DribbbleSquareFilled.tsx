// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import DribbbleSquareFilledSvg from '@ant-design/icons-svg/lib/asn/DribbbleSquareFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-dribbble-square-filled')
export default class DribbbleSquareFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'DribbbleSquareFilled';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={DribbbleSquareFilledSvg}></AntdIcon>;
  };
}