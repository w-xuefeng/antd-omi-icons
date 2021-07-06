// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import PauseOutlinedSvg from '@ant-design/icons-svg/lib/asn/PauseOutlined';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-pause-outlined')
export default class PauseOutlined extends OmiComponent<AntdIconProps> {
  static displayName = 'PauseOutlined';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={PauseOutlinedSvg}></AntdIcon>;
  };
}