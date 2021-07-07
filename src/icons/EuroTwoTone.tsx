// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import EuroTwoToneSvg from '@ant-design/icons-svg/lib/asn/EuroTwoTone';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-euro-two-tone')
export default class EuroTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'EuroTwoTone';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={EuroTwoToneSvg} />;
  };
}