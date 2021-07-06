// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import UpCircleOutlinedSvg from '@ant-design/icons-svg/lib/asn/UpCircleOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-up-circle-outlined')
export default class UpCircleOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'UpCircleOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={UpCircleOutlinedSvg}></AntdIcon>;
  };
}