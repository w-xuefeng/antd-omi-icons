// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

const FireTwoToneSvg = {"name":"fire","theme":"twotone"};

@tag('o-fire-two-tone')
export default class FireTwoTone extends OmiComponent<AntdIconProps> {
  static displayName = 'FireTwoTone';
  static tagName = 'o-fire-two-tone';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...props} icon={FireTwoToneSvg} />;
  };
}