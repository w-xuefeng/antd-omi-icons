// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import ZhihuOutlinedSvg from '@ant-design/icons-svg/lib/asn/ZhihuOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-zhihu-outlined')
export default class ZhihuOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'ZhihuOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={ZhihuOutlinedSvg}></AntdIcon>;
  };
}