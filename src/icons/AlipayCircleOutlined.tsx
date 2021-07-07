// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import AlipayCircleOutlinedSvg from '@ant-design/icons-svg/lib/asn/AlipayCircleOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-alipay-circle-outlined')
export default class AlipayCircleOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'AlipayCircleOutlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={AlipayCircleOutlinedSvg} />;
  };
}