// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import DingtalkOutlinedSvg from '@ant-design/icons-svg/lib/asn/DingtalkOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-dingtalk-outlined')
export default class DingtalkOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'DingtalkOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={DingtalkOutlinedSvg}></AntdIcon>;
  };
}