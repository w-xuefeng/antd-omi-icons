// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import YuqueOutlinedSvg from '@ant-design/icons-svg/lib/asn/YuqueOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-yuque-outlined')
export default class YuqueOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'YuqueOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={YuqueOutlinedSvg}></AntdIcon>;
  };
}