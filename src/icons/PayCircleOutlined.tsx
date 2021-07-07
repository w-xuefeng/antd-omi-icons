// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import PayCircleOutlinedSvg from '@ant-design/icons-svg/lib/asn/PayCircleOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-pay-circle-outlined')
export default class PayCircleOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'PayCircleOutlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={PayCircleOutlinedSvg} />;
  };
}