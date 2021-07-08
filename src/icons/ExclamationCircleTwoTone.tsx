// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import ExclamationCircleTwoToneSvg from '@ant-design/icons-svg/es/asn/ExclamationCircleTwoTone';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-exclamation-circle-two-tone')
export default class ExclamationCircleTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'ExclamationCircleTwoTone';
  static tagName = 'o-exclamation-circle-two-tone';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={ExclamationCircleTwoToneSvg} />;
  };
}