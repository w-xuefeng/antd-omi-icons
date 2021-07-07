// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import ExceptionOutlinedSvg from '@ant-design/icons-svg/lib/asn/ExceptionOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-exception-outlined')
export default class ExceptionOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'ExceptionOutlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={ExceptionOutlinedSvg} />;
  };
}