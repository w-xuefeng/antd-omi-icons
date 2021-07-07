// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import PercentageOutlinedSvg from '@ant-design/icons-svg/lib/asn/PercentageOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-percentage-outlined')
export default class PercentageOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'PercentageOutlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={PercentageOutlinedSvg} />;
  };
}