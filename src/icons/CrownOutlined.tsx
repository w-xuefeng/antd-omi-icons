// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import CrownOutlinedSvg from '@ant-design/icons-svg/es/asn/CrownOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-crown-outlined')
export default class CrownOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'CrownOutlined';
  static tagName = 'o-crown-outlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={CrownOutlinedSvg} />;
  };
}