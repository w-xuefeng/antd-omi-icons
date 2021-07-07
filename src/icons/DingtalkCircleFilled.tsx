// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import DingtalkCircleFilledSvg from '@ant-design/icons-svg/lib/asn/DingtalkCircleFilled';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-dingtalk-circle-filled')
export default class DingtalkCircleFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'DingtalkCircleFilled';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={DingtalkCircleFilledSvg} />;
  };
}