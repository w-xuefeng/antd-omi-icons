// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import SafetyOutlinedSvg from '@ant-design/icons-svg/lib/asn/SafetyOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-safety-outlined')
export default class SafetyOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'SafetyOutlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={SafetyOutlinedSvg} />;
  };
}