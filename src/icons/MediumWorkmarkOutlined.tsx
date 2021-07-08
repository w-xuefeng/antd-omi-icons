// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import MediumWorkmarkOutlinedSvg from '@ant-design/icons-svg/es/asn/MediumWorkmarkOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-medium-workmark-outlined')
export default class MediumWorkmarkOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'MediumWorkmarkOutlined';
  static tagName = 'o-medium-workmark-outlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={MediumWorkmarkOutlinedSvg} />;
  };
}