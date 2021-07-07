// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import CheckCircleTwoToneSvg from '@ant-design/icons-svg/lib/asn/CheckCircleTwoTone';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-check-circle-two-tone')
export default class CheckCircleTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'CheckCircleTwoTone';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={CheckCircleTwoToneSvg} />;
  };
}