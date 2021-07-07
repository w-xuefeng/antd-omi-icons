// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import FrownFilledSvg from '@ant-design/icons-svg/lib/asn/FrownFilled';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-frown-filled')
export default class FrownFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'FrownFilled';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={FrownFilledSvg} />;
  };
}