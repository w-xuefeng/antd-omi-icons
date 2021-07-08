// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import FrownOutlinedSvg from '@ant-design/icons-svg/es/asn/FrownOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-frown-outlined')
export default class FrownOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'FrownOutlined';
  static tagName = 'o-frown-outlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={FrownOutlinedSvg} />;
  };
}