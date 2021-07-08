// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import InsertRowLeftOutlinedSvg from '@ant-design/icons-svg/es/asn/InsertRowLeftOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-insert-row-left-outlined')
export default class InsertRowLeftOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'InsertRowLeftOutlined';
  static tagName = 'o-insert-row-left-outlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={InsertRowLeftOutlinedSvg} />;
  };
}