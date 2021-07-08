// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import DingtalkOutlinedSvg from '@ant-design/icons-svg/es/asn/DingtalkOutlined';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-dingtalk-outlined')
export default class DingtalkOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'DingtalkOutlined';
  static tagName = 'o-dingtalk-outlined';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={DingtalkOutlinedSvg} />;
  };
}