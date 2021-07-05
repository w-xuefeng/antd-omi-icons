// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import WarningTwoToneSvg from '@ant-design/icons-svg/lib/asn/WarningTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-warning-two-tone')
export default class WarningTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'WarningTwoTone';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={WarningTwoToneSvg}></AntdIcon>;
  };
}