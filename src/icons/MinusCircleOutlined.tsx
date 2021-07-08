// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import MinusCircleOutlinedSvg from '@ant-design/icons-svg/es/asn/MinusCircleOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-minus-circle-outlined')
export default class MinusCircleOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'MinusCircleOutlined';
  static tagName = 'o-minus-circle-outlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={MinusCircleOutlinedSvg} />;
  };
}