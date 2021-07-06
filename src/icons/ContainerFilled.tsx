// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import ContainerFilledSvg from '@ant-design/icons-svg/lib/asn/ContainerFilled';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

@tag('o-container-filled')
export default class ContainerFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'ContainerFilled';
  static inheritAttrs = false;
  render(props: AntdIconProps) {
    return <AntdIcon {...props} icon={ContainerFilledSvg}></AntdIcon>;
  };
}