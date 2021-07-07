// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import SaveFilledSvg from '@ant-design/icons-svg/lib/asn/SaveFilled';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-save-filled')
export default class SaveFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'SaveFilled';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={SaveFilledSvg} />;
  };
}