// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import GooglePlusSquareFilledSvg from '@ant-design/icons-svg/lib/asn/GooglePlusSquareFilled';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-google-plus-square-filled')
export default class GooglePlusSquareFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'GooglePlusSquareFilled';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={GooglePlusSquareFilledSvg} />;
  };
}