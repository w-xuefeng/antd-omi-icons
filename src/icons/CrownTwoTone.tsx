// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import CrownTwoToneSvg from '@ant-design/icons-svg/es/asn/CrownTwoTone';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-crown-two-tone')
export default class CrownTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'CrownTwoTone';
  static tagName = 'o-crown-two-tone';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={CrownTwoToneSvg} />;
  };
}