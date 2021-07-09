// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

const EditTwoToneSvg = {"name":"edit","theme":"twotone"};

@tag('o-edit-two-tone')
export default class EditTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'EditTwoTone';
  static tagName = 'o-edit-two-tone';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={EditTwoToneSvg} />;
  };
}