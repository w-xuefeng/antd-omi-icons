// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import DisconnectOutlinedSvg from '@ant-design/icons-svg/lib/asn/DisconnectOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-disconnect-outlined')
export default class DisconnectOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'DisconnectOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={DisconnectOutlinedSvg}></AntdIcon>;
  };
}