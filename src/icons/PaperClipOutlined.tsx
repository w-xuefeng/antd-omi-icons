// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import PaperClipOutlinedSvg from '@ant-design/icons-svg/lib/asn/PaperClipOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-paper-clip-outlined')
export default class PaperClipOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'PaperClipOutlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={PaperClipOutlinedSvg} />;
  };
}