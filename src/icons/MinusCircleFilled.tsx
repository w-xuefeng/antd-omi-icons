// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import MinusCircleFilledSvg from '@ant-design/icons-svg/es/asn/MinusCircleFilled';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-minus-circle-filled')
export default class MinusCircleFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'MinusCircleFilled';
  static tagName = 'o-minus-circle-filled';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={MinusCircleFilledSvg} />;
  };
}