// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import AmazonSquareFilledSvg from '@ant-design/icons-svg/es/asn/AmazonSquareFilled';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-amazon-square-filled')
export default class AmazonSquareFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'AmazonSquareFilled';
  static tagName = 'o-amazon-square-filled';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={AmazonSquareFilledSvg} />;
  };
}