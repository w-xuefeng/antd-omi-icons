// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import MinusCircleTwoToneSvg from '@ant-design/icons-svg/lib/asn/MinusCircleTwoTone';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-minus-circle-two-tone')
export default class MinusCircleTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'MinusCircleTwoTone';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={MinusCircleTwoToneSvg} />;
  };
}