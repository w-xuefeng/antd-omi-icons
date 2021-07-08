// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import DribbbleSquareFilledSvg from '@ant-design/icons-svg/es/asn/DribbbleSquareFilled';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-dribbble-square-filled')
export default class DribbbleSquareFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'DribbbleSquareFilled';
  static tagName = 'o-dribbble-square-filled';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={DribbbleSquareFilledSvg} />;
  };
}