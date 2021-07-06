// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import GoogleSquareFilledSvg from '@ant-design/icons-svg/lib/asn/GoogleSquareFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-google-square-filled')
export default class GoogleSquareFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'GoogleSquareFilled';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={GoogleSquareFilledSvg}></AntdIcon>;
  };
}