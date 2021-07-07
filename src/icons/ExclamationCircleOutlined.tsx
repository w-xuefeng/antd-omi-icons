// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import ExclamationCircleOutlinedSvg from '@ant-design/icons-svg/lib/asn/ExclamationCircleOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-exclamation-circle-outlined')
export default class ExclamationCircleOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'ExclamationCircleOutlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={ExclamationCircleOutlinedSvg} />;
  };
}