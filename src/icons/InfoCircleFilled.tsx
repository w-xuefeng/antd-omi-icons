// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import InfoCircleFilledSvg from '@ant-design/icons-svg/lib/asn/InfoCircleFilled';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-info-circle-filled')
export default class InfoCircleFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'InfoCircleFilled';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={InfoCircleFilledSvg} />;
  };
}