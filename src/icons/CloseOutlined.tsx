// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import CloseOutlinedSvg from '@ant-design/icons-svg/lib/asn/CloseOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-close-outlined')
export default class CloseOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'CloseOutlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={CloseOutlinedSvg} />;
  };
}