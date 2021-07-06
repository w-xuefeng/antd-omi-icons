// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import InfoCircleOutlinedSvg from '@ant-design/icons-svg/lib/asn/InfoCircleOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-info-circle-outlined')
export default class InfoCircleOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'InfoCircleOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={InfoCircleOutlinedSvg}></AntdIcon>;
  };
}