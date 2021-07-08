// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import SmileFilledSvg from '@ant-design/icons-svg/es/asn/SmileFilled';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-smile-filled')
export default class SmileFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'SmileFilled';
  static tagName = 'o-smile-filled';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={SmileFilledSvg} />;
  };
}