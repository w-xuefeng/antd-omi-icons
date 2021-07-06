// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import AmazonSquareFilledSvg from '@ant-design/icons-svg/lib/asn/AmazonSquareFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-amazon-square-filled')
export default class AmazonSquareFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'AmazonSquareFilled';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={AmazonSquareFilledSvg}></AntdIcon>;
  };
}