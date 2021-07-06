// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import DingtalkSquareFilledSvg from '@ant-design/icons-svg/lib/asn/DingtalkSquareFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-dingtalk-square-filled')
export default class DingtalkSquareFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'DingtalkSquareFilled';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={DingtalkSquareFilledSvg}></AntdIcon>;
  };
}