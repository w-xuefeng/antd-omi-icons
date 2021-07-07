// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import MobileFilledSvg from '@ant-design/icons-svg/lib/asn/MobileFilled';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-mobile-filled')
export default class MobileFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'MobileFilled';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={MobileFilledSvg} />;
  };
}