// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import ScanOutlinedSvg from '@ant-design/icons-svg/lib/asn/ScanOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-scan-outlined')
export default class ScanOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'ScanOutlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={ScanOutlinedSvg} />;
  };
}