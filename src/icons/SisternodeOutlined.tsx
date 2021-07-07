// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import SisternodeOutlinedSvg from '@ant-design/icons-svg/lib/asn/SisternodeOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-sisternode-outlined')
export default class SisternodeOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'SisternodeOutlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={SisternodeOutlinedSvg} />;
  };
}