// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import MediumSquareFilledSvg from '@ant-design/icons-svg/es/asn/MediumSquareFilled';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-medium-square-filled')
export default class MediumSquareFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'MediumSquareFilled';
  static tagName = 'o-medium-square-filled';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={MediumSquareFilledSvg} />;
  };
}