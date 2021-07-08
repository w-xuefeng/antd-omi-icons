// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import FlagOutlinedSvg from '@ant-design/icons-svg/es/asn/FlagOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-flag-outlined')
export default class FlagOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'FlagOutlined';
  static tagName = 'o-flag-outlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={FlagOutlinedSvg} />;
  };
}