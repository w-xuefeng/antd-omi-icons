// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import FastForwardFilledSvg from '@ant-design/icons-svg/lib/asn/FastForwardFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-fast-forward-filled')
export default class FastForwardFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'FastForwardFilled';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={FastForwardFilledSvg}></AntdIcon>;
  };
}