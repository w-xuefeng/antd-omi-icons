// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import RocketOutlinedSvg from '@ant-design/icons-svg/lib/asn/RocketOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-rocket-outlined')
export default class RocketOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'RocketOutlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={RocketOutlinedSvg} />;
  };
}