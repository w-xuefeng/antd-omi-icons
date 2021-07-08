// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import BehanceSquareFilledSvg from '@ant-design/icons-svg/es/asn/BehanceSquareFilled';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-behance-square-filled')
export default class BehanceSquareFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'BehanceSquareFilled';
  static tagName = 'o-behance-square-filled';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={BehanceSquareFilledSvg} />;
  };
}