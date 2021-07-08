// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import DisconnectOutlinedSvg from '@ant-design/icons-svg/es/asn/DisconnectOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-disconnect-outlined')
export default class DisconnectOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'DisconnectOutlined';
  static tagName = 'o-disconnect-outlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={DisconnectOutlinedSvg} />;
  };
}