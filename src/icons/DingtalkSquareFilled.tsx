// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import DingtalkSquareFilledSvg from '@ant-design/icons-svg/es/asn/DingtalkSquareFilled';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-dingtalk-square-filled')
export default class DingtalkSquareFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'DingtalkSquareFilled';
  static tagName = 'o-dingtalk-square-filled';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={DingtalkSquareFilledSvg} />;
  };
}