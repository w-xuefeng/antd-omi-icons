// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import EuroCircleFilledSvg from '@ant-design/icons-svg/lib/asn/EuroCircleFilled';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-euro-circle-filled')
export default class EuroCircleFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'EuroCircleFilled';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={EuroCircleFilledSvg} />;
  };
}