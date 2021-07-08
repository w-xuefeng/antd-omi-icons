// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import BehanceCircleFilledSvg from '@ant-design/icons-svg/es/asn/BehanceCircleFilled';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-behance-circle-filled')
export default class BehanceCircleFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'BehanceCircleFilled';
  static tagName = 'o-behance-circle-filled';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={BehanceCircleFilledSvg} />;
  };
}