// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import ExclamationCircleFilledSvg from '@ant-design/icons-svg/es/asn/ExclamationCircleFilled';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-exclamation-circle-filled')
export default class ExclamationCircleFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'ExclamationCircleFilled';
  static tagName = 'o-exclamation-circle-filled';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={ExclamationCircleFilledSvg} />;
  };
}