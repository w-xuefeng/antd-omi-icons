// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import EuroCircleTwoToneSvg from '@ant-design/icons-svg/lib/asn/EuroCircleTwoTone';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-euro-circle-two-tone')
export default class EuroCircleTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'EuroCircleTwoTone';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={EuroCircleTwoToneSvg} />;
  };
}