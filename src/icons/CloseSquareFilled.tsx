// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import CloseSquareFilledSvg from '@ant-design/icons-svg/lib/asn/CloseSquareFilled';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-close-square-filled')
export default class CloseSquareFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'CloseSquareFilled';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={CloseSquareFilledSvg} />;
  };
}