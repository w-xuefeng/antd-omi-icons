// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import AmazonCircleFilledSvg from '@ant-design/icons-svg/lib/asn/AmazonCircleFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-amazon-circle-filled')
export default class AmazonCircleFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'AmazonCircleFilled';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={AmazonCircleFilledSvg}></AntdIcon>;
  };
}