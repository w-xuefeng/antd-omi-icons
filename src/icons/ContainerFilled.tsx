// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import ContainerFilledSvg from '@ant-design/icons-svg/lib/asn/ContainerFilled';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-container-filled')
export default class ContainerFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'ContainerFilled';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={ContainerFilledSvg} />;
  };
}