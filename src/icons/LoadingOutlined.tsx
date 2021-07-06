// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import LoadingOutlinedSvg from '@ant-design/icons-svg/lib/asn/LoadingOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-loading-outlined')
export default class LoadingOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'LoadingOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={LoadingOutlinedSvg}></AntdIcon>;
  };
}