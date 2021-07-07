// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import TabletFilledSvg from '@ant-design/icons-svg/lib/asn/TabletFilled';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-tablet-filled')
export default class TabletFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'TabletFilled';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={TabletFilledSvg} />;
  };
}