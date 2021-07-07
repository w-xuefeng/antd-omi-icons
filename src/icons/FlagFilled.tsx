// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import FlagFilledSvg from '@ant-design/icons-svg/lib/asn/FlagFilled';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-flag-filled')
export default class FlagFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'FlagFilled';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={FlagFilledSvg} />;
  };
}