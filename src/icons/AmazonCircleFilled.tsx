// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import AmazonCircleFilledSvg from '@ant-design/icons-svg/es/asn/AmazonCircleFilled';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-amazon-circle-filled')
export default class AmazonCircleFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'AmazonCircleFilled';
  static tagName = 'o-amazon-circle-filled';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={AmazonCircleFilledSvg} />;
  };
}