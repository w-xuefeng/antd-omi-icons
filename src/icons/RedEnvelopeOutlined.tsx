// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import RedEnvelopeOutlinedSvg from '@ant-design/icons-svg/es/asn/RedEnvelopeOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-red-envelope-outlined')
export default class RedEnvelopeOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'RedEnvelopeOutlined';
  static tagName = 'o-red-envelope-outlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={RedEnvelopeOutlinedSvg} />;
  };
}