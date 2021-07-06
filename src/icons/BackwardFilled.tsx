// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import BackwardFilledSvg from '@ant-design/icons-svg/lib/asn/BackwardFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-backward-filled')
export default class BackwardFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'BackwardFilled';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={BackwardFilledSvg}></AntdIcon>;
  };
}