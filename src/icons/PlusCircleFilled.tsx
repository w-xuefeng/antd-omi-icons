// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import PlusCircleFilledSvg from '@ant-design/icons-svg/lib/asn/PlusCircleFilled';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-plus-circle-filled')
export default class PlusCircleFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'PlusCircleFilled';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={PlusCircleFilledSvg} />;
  };
}