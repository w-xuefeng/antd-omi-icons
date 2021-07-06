// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import WarningFilledSvg from '@ant-design/icons-svg/lib/asn/WarningFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-warning-filled')
export default class WarningFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'WarningFilled';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={WarningFilledSvg}></AntdIcon>;
  };
}