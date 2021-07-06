// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import CloudFilledSvg from '@ant-design/icons-svg/lib/asn/CloudFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-cloud-filled')
export default class CloudFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'CloudFilled';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={CloudFilledSvg}></AntdIcon>;
  };
}