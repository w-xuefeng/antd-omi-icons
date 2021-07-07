// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import BugFilledSvg from '@ant-design/icons-svg/lib/asn/BugFilled';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

@tag('o-bug-filled')
export default class BugFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'BugFilled';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={BugFilledSvg} />;
  };
}