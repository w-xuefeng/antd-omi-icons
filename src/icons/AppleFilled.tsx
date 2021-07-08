// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import AppleFilledSvg from '@ant-design/icons-svg/es/asn/AppleFilled';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-apple-filled')
export default class AppleFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'AppleFilled';
  static tagName = 'o-apple-filled';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={AppleFilledSvg} />;
  };
}