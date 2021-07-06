// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import EnvironmentOutlinedSvg from '@ant-design/icons-svg/lib/asn/EnvironmentOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-environment-outlined')
export default class EnvironmentOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'EnvironmentOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={EnvironmentOutlinedSvg}></AntdIcon>;
  };
}