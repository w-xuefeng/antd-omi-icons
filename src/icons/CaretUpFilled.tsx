// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import CaretUpFilledSvg from '@ant-design/icons-svg/lib/asn/CaretUpFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-caret-up-filled')
export default class CaretUpFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'CaretUpFilled';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={CaretUpFilledSvg}></AntdIcon>;
  };
}