// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import MacCommandFilledSvg from '@ant-design/icons-svg/lib/asn/MacCommandFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-mac-command-filled')
export default class MacCommandFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'MacCommandFilled';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={MacCommandFilledSvg}></AntdIcon>;
  };
}