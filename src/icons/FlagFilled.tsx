// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import FlagFilledSvg from '@ant-design/icons-svg/lib/asn/FlagFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-flag-filled')
export default class FlagFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'FlagFilled';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={FlagFilledSvg}></AntdIcon>;
  };
}