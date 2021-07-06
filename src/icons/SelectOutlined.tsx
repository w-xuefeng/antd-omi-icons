// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import SelectOutlinedSvg from '@ant-design/icons-svg/lib/asn/SelectOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-select-outlined')
export default class SelectOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'SelectOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={SelectOutlinedSvg}></AntdIcon>;
  };
}