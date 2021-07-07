// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import Html5FilledSvg from '@ant-design/icons-svg/lib/asn/Html5Filled';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-html5-filled')
export default class Html5Filled extends OmiComponent<AntdIconProps> {
  static displayName = 'Html5Filled';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={Html5FilledSvg} />;
  };
}