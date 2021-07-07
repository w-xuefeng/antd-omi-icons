// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import CodepenCircleOutlinedSvg from '@ant-design/icons-svg/lib/asn/CodepenCircleOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-codepen-circle-outlined')
export default class CodepenCircleOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'CodepenCircleOutlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={CodepenCircleOutlinedSvg} />;
  };
}