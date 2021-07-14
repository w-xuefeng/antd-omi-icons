// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { Component as OmiComponent, h, tag } from 'omi';
import { rmIEFP } from 'omi-tools';
import type { AntdIconProps } from '../components/types';
import '../components/AntdIcon';

const ExclamationCircleFilledSvg: AntdIconProps['icon'] = {"icon":{"tag":"svg","attrs":{"viewBox":"64 64 896 896","focusable":"false"},"children":[{"tag":"path","attrs":{"d":"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm-32 232c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V296zm32 440a48.01 48.01 0 010-96 48.01 48.01 0 010 96z"}}]},"name":"exclamation-circle","theme":"filled"};

declare global {
  namespace JSX {
    interface IntrinsicElements {
      ['o-exclamation-circle-filled']: Omi.Props & Partial<AntdIconProps>
    }
  }
}

@tag('o-exclamation-circle-filled')
export default class ExclamationCircleFilled extends OmiComponent<AntdIconProps> {
  static displayName = 'ExclamationCircleFilled';
  static tagName = 'o-exclamation-circle-filled';
  static inheritAttrs = false;
  render(props: Omi.RenderableProps<AntdIconProps>) {
    return <o-antd-icon {...rmIEFP(props)} icon={ExclamationCircleFilledSvg} />;
  };
}