// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import Html5OutlinedSvg from '@ant-design/icons-svg/es/asn/Html5Outlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-html5-outlined')
export default class Html5Outlined extends OmiComponent<AntdIconProps> {
  static displayName = 'Html5Outlined';
  static tagName = 'o-html5-outlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={Html5OutlinedSvg} />;
  };
}