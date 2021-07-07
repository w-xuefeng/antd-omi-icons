// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import FunctionOutlinedSvg from '@ant-design/icons-svg/lib/asn/FunctionOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-function-outlined')
export default class FunctionOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'FunctionOutlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={FunctionOutlinedSvg} />;
  };
}