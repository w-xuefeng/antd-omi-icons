// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import RedoOutlinedSvg from '@ant-design/icons-svg/lib/asn/RedoOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-redo-outlined')
export default class RedoOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'RedoOutlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={RedoOutlinedSvg} />;
  };
}