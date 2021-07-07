// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import InfoCircleOutlinedSvg from '@ant-design/icons-svg/lib/asn/InfoCircleOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-info-circle-outlined')
export default class InfoCircleOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'InfoCircleOutlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={InfoCircleOutlinedSvg} />;
  };
}