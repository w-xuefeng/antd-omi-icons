// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import DingdingOutlinedSvg from '@ant-design/icons-svg/lib/asn/DingdingOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-dingding-outlined')
export default class DingdingOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'DingdingOutlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={DingdingOutlinedSvg} />;
  };
}