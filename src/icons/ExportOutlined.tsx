// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import ExportOutlinedSvg from '@ant-design/icons-svg/es/asn/ExportOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-export-outlined')
export default class ExportOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'ExportOutlined';
  static tagName = 'o-export-outlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={ExportOutlinedSvg} />;
  };
}