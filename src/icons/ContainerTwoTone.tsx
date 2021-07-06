// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import ContainerTwoToneSvg from '@ant-design/icons-svg/lib/asn/ContainerTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-container-two-tone')
export default class ContainerTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'ContainerTwoTone';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={ContainerTwoToneSvg}></AntdIcon>;
  };
}