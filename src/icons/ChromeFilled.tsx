// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import ChromeFilledSvg from '@ant-design/icons-svg/lib/asn/ChromeFilled';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-chrome-filled')
export default class ChromeFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'ChromeFilled';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={ChromeFilledSvg} />;
  };
}