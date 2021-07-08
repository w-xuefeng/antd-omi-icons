// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import GoogleSquareFilledSvg from '@ant-design/icons-svg/es/asn/GoogleSquareFilled';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-google-square-filled')
export default class GoogleSquareFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'GoogleSquareFilled';
  static tagName = 'o-google-square-filled';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={GoogleSquareFilledSvg} />;
  };
}