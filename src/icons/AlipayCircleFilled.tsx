// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import AlipayCircleFilledSvg from '@ant-design/icons-svg/es/asn/AlipayCircleFilled';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-alipay-circle-filled')
export default class AlipayCircleFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'AlipayCircleFilled';
  static tagName = 'o-alipay-circle-filled';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={AlipayCircleFilledSvg} />;
  };
}