// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import SafetyOutlinedSvg from '@ant-design/icons-svg/lib/asn/SafetyOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-safety-outlined')
export default class SafetyOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'SafetyOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps, context: any) {
    const p = { ...props, ...context.attrs };
    return <AntdIcon {...p} icon={SafetyOutlinedSvg}></AntdIcon>;
  };
}