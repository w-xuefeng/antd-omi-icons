// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import CloudFilledSvg from '@ant-design/icons-svg/es/asn/CloudFilled';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-cloud-filled')
export default class CloudFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'CloudFilled';
  static tagName = 'o-cloud-filled';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={CloudFilledSvg} />;
  };
}