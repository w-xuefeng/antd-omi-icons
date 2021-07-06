// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import ZhihuCircleFilledSvg from '@ant-design/icons-svg/lib/asn/ZhihuCircleFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-zhihu-circle-filled')
export default class ZhihuCircleFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'ZhihuCircleFilled';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={ZhihuCircleFilledSvg}></AntdIcon>;
  };
}