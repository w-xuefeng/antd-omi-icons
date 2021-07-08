// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import YuqueFilledSvg from '@ant-design/icons-svg/es/asn/YuqueFilled';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-yuque-filled')
export default class YuqueFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'YuqueFilled';
  static tagName = 'o-yuque-filled';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={YuqueFilledSvg} />;
  };
}