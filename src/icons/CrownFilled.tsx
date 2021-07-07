// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import CrownFilledSvg from '@ant-design/icons-svg/lib/asn/CrownFilled';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-crown-filled')
export default class CrownFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'CrownFilled';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={CrownFilledSvg} />;
  };
}