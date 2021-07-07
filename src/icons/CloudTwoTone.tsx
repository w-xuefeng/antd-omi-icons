// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import CloudTwoToneSvg from '@ant-design/icons-svg/lib/asn/CloudTwoTone';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-cloud-two-tone')
export default class CloudTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'CloudTwoTone';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={CloudTwoToneSvg} />;
  };
}