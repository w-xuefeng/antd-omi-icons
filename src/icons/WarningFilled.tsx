// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import WarningFilledSvg from '@ant-design/icons-svg/lib/asn/WarningFilled';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-warning-filled')
export default class WarningFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'WarningFilled';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={WarningFilledSvg} />;
  };
}