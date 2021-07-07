// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import VerifiedOutlinedSvg from '@ant-design/icons-svg/lib/asn/VerifiedOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-verified-outlined')
export default class VerifiedOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'VerifiedOutlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={VerifiedOutlinedSvg} />;
  };
}