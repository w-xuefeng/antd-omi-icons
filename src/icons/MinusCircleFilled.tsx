// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import MinusCircleFilledSvg from '@ant-design/icons-svg/lib/asn/MinusCircleFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-minus-circle-filled')
export default class MinusCircleFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'MinusCircleFilled';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={MinusCircleFilledSvg}></AntdIcon>;
  };
}