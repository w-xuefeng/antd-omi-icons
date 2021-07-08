// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import TabletTwoToneSvg from '@ant-design/icons-svg/es/asn/TabletTwoTone';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-tablet-two-tone')
export default class TabletTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'TabletTwoTone';
  static tagName = 'o-tablet-two-tone';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={TabletTwoToneSvg} />;
  };
}