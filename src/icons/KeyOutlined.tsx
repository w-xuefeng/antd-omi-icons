// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import KeyOutlinedSvg from '@ant-design/icons-svg/lib/asn/KeyOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-key-outlined')
export default class KeyOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'KeyOutlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={KeyOutlinedSvg} />;
  };
}